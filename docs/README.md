# Chowtime

Friends, colleagues, and significant others alike all face a similar problem day in and day out: "What are we going to eat?" Indecisiveness and disagreement take the front seat as groups spend more time trying to figure out what to eat than they do actually eating. What if there was a way to take the decision aspect out of the process and get right to chowing down? Well, there's an app for that.

Chowtime is a mobile App built using React Native, that utilizes the Yelp Fusion API to decide on a restaurant for you! Just provide a few search criteria and let Chowtime handle the rest. Don't like the suggestion? It'll give you another one until you do. It even gives you the option to call an Uber straight to the restaurant. Now, deciding what to eat can be as simple as opening an app!

## Functionality & MVP

With this extension, users will be able to:

- [ ] Hosting on The App Store
- [ ] Geolocation based search
- [ ] Yelp Fusion API Implementation
- [ ] Uber API Implementation
- [ ] Restaurant display page

## Wireframes

Pictured below is the home page where a user will be able to enter search criteria, which will be used to find a restaurant.

![Search Page](https://res.cloudinary.com/dslok1mwv/image/upload/v1496635237/Screen_Shot_2017-06-04_at_8.58.43_PM_fmgku5.png)

Below is the results page, which will display a restaurant's information taken from Yelp. Users will have the option to either search for another restaurant or call an Uber to the restaurant.

![Results Page](https://res.cloudinary.com/dslok1mwv/image/upload/v1496635238/Screen_Shot_2017-06-04_at_8.51.06_PM_au4fcj.png)

## Technologies & Technical Challenges

Technologies Used:
- React Native
- Yelp Fusion API
- Uber API
- XCode

The primary challenges will be:
- Learning React Native.
- Converting user's location to latitude and longitude coordinates and passing it to Uber's API.
- Making Chowtime Android and iOS compatible.

## Things we accomplished this weekend.

1. Research Yelp Fusion API and regulations.
2. Research Uber API and regulations.
3. Install and set up React Native.
4. Research Apple Developer Program.
5. Start the skeleton of the project.

## Implementation Timeline

**Day 1:** Get started learning React Native. Familiarizing ourselves with components, styles, and ecosystem.

**Day 2:** Complete layout for initial search page.

**Day 3:** Implement Yelp Fusion API given search criteria and store results on the frontend.

**Day 4-5:** Implement restaurant result page with ability to decline result and display another restaurant.

**Day 6:** Implement search again if user declines all restaurant results.

**Day 7:** Implement Uber ride button, passing in starting and ending coordinates.

## Plan for publishing to App Store

- Purchase Apple Developer license and submit to App Store for review.
- Once on App store, advertise to friends and family.
