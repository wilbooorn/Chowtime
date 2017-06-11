# Chowtime

[Visit the Website][site]

[site]: https://wilbooorn.github.io/Chowtime/

Friends, colleagues, and significant others alike all face a similar problem day in and day out: "What are we going to eat?" Indecisiveness and disagreement take the front seat as groups spend more time trying to figure out what to eat than they do actually eating. What if there was a way to take the decision aspect out of the process and get right to chowing down? Well, there's an app for that.

Chowtime is a mobile App built using React Native, that utilizes the Yelp Fusion API to decide on a restaurant for you! Just provide a few search criteria and let Chowtime handle the rest. Don't like the suggestion? It'll give you another one until you do. It even gives you the option to get directions straight to the restaurant. Now, deciding what to eat can be as simple as opening an app!

### Search Criteria

The user can narrow the search by category, price, and distance. These criteria are passed in as query parameters to the Yelp Fusion API call, to produce restaurants that better fit the user's mood.


![Search Page](http://res.cloudinary.com/dslok1mwv/image/upload/c_scale,h_782/v1497143925/search_pkcbg9.png)

### Search results

The result page shows one restaurant from the Yelp Fusion API call, as well as its rating as on Yelp. The user can either choose to have a different restaurant displayed to them, or if they like the current option, they can get directions to the restaurant. Pressing the "Get Directions" button will send the user's current location, as well as the restaurant's location to the Google Maps API, and open up Google Maps in the browser.  

![Result Page](http://res.cloudinary.com/dslok1mwv/image/upload/c_scale,h_782/v1497143925/result_j37obr.png)
