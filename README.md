# The Prism Team

## Running
npm install
node index.js

## Design

### Language
JavaScript was able to accomplish the goals of the project through Node.js to
 output the solution to the console. With libraries to perform HTTP GET request
 as well as parse HTML, Node.js was used.

### Design
#### Goals
 1. Perform GET request of https://prism.com/about/
 2. Parse HTML and extract relevant data.
 3. Output to console in desired format
#### Decisions
My primary goal was to output the data in the desired format. Using Chrome to
 inspect the page I found the relevant content within relevant DOM elements.
 Using request to perform an HTTP GET and then selected cheerio to parse out
 the relevant data because of it's familiar jQuery syntax.

### Libraries
 - request - for http request for data
 - cheerio - parsing HTML data


## Note
While working on "The Prism Team" problem, the question says there are 34
 employees but in counting the images on "About Us" I am seeing 38. Since
 they are all in the same list, I am assuming a few employees have been
 added to the team. 
