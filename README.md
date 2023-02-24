# Spawning Front End Take Home Challenge

## Set Up
1. Fork and clone [this](https://github.com/mullinsand/spawning-take-home) repo
2. Type `cd spawning-take-home` to move into the root directory
3. Run `npm install` to install necessary dependencies
4. Run `npm start`
5. Copy local url given by running `npm start` and paste it to your browser


## Reflections

### The Good

- Accomplished all functionality necessary. Page displays all products from list, includes a search bar that can filter results based on the query, each product has a button for adding to shopping cart, and the shopping cart tracks total number of items and the total price.

- I was able to build components for each functionality in an attempt to adhere to OOP
- I was able to use reduce for my cart total price and string filter and map together for my search with minimal use of conditionals

### The Bad
 - Ran into an issue with passing my products to my product component that hung me up for about 30min. I worked backwards trying to identify where exactly I was losing the product using console.log and debugger. I eventually figured out a solution where I assigned a bunch of variables from the product object and passed those through.
 - Search bar took me a little longer because I had not had experience passing things back up to the app from children. It was really cool to finally figure that one out and understand the process. This understanding made building the shopping cart much faster.
 - Taking longer to achieve functionality meant UI suffered. I had some ideas for building out the css but felt like the functionality was more important at first.
 - I had quite a few ideas of things to refactor and edge cases to take into consideration that didn't get to be done.
 
 ### Next Steps
 - Update CSS for each product and the product index so that they are arrayed on the page in an orderly fashion
 - Implement lazy loading for product attributes, esp images
 - Filter function should just be skipped if searchQuery is "" instead of going through each product
 - Break out business logic from UI into their own files for better adherence to OOP
 - Add comments to places for clarification on coding decisions
 - Error handling
     - Attribute is not present (esp price/id for the shopping cart)
     - Can't read the Data file anymore
 - Edge case - No search results (give user some feedback on this)
 - Extras:
     - Sorts by attribute with button for selecting
     - Pagination
     - Search bar can be changed to search by any attribute
