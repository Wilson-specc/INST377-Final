Title: Poke Finder Tool
Dscription of Project: Using the Pokémon TCG API, this app fetches and shows all card variations for any Pokémon name you type in the search bar. You get visuals, data, and plenty of collection clarity.
Target Browsers: Windows


Developer Manual:

a. Make sure to install Node Version Manager. Step by step guide is here: 
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

    i. If you'd like to create your own database on Supabase, make sure to create you own .env file and include
    your supabase Key and URL. 

b. Once you've installed node, type node.server js (server.js is our backend), and then run the cards.html file.

c. In order to run tests, make sure to look at the Developer  Tools via Inspect on the browser on the cards.html page, 
this will ensure that Supabase is reciving data collected from the site. If you get an error like "object not found", 
its most likely supabase trying to find data for a column the site doesn't produce. So make sure the columns on Supabase are match up
with the results on the site.

d. The API we used is Pokemonn TCG API, the GET returns a list of pokemons previously searched. Our POST adds a new entry for each pokemon that was looked up. 

e. The Application is SLOW. It takes rougly 5 seconds for results to appear after you have searched for a pokemon. Also, the slider
is NOT perfect. After sliding for a long time (for ex: Mew) the slider will slowly not show the pokemon card. 

