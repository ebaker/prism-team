var $ = require('cheerio');
var request = require('request');

var URL = 'https://prism.com/about/';

request(URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var parsedHTML = $.load(body);

    // get all li tags within ul.img-container and loop over them
    var imageURLs = [];
    parsedHTML('ul.img-container li').map(function(i, li) {
      var name = $(li).find('.caption > .bold').text();
      var role = $(li).find('.caption > .lead').text();
      // console.log('%s: %s, %s', i, name, role);
      console.log('%s, %s', name, role);
    }); 
  }
});
