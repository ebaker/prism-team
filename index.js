var request = require('request'); // HTTP client
var $ = require('cheerio'); // HTML parser

var URL = 'https://prism.com/about/';

// perform GET request on URL
request(URL, function (error, response, body) {
  
  // upon success (error code 200) and no errors
  if (!error && response.statusCode == 200) {

    // parse HTML via cheerio
    var parsedHTML = $.load(body);

    // get all li tags within ul.img-container and loop over them
    parsedHTML('ul.img-container li').map(function(i, li) {

      // extract name stored in dom element class 'bold'
      var name = $(li).find('.caption > .bold').text();
      
      // extract name stored in dom element class 'lead'
      var role = $(li).find('.caption > .lead').text();

      // output data in "<name>, <role>" format
      console.log('%s, %s', name, role);
    }); 
  }
});
