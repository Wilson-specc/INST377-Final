require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.use(cors());
app.use(express.json());

app.post('/searches', async (req, res) => {
  const { pokemon_name, card_count } = req.body;

  if (!pokemon_name || typeof card_count !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  try {
    const { data, error } = await supabase
      .from('searches')
      .insert([{ pokemon_name, card_count }]);

    if (error) {
      console.error('Insert error:', error.message);
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Saved to Supabase!', data });
  } catch (err) {
    console.error('Server error on POST:', err);
    res.status(500).json({ error: 'Unexpected server error' });
  }
});

app.get('/searches', async (req, res) => {
  console.log("🔍 Fetching search history from Supabase...");

  try {
    const { data, error } = await supabase
      .from('searches')
      .select('*'); 

    if (error) {
      console.error('Supabase SELECT error:', error.message);
      return res.status(500).json({ error: error.message });
    }

    res.json(data); 
  } catch (err) {
    console.error('Server error on GET:', err);
    res.status(500).json({ error: 'Unexpected server error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
