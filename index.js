var request = require('request');

var URL = 'https://prism.com/about/';

request(URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the about
  }
});
