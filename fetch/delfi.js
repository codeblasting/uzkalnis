var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var c = 0, $ = 0;

var pageToVisit = "http://www.delfi.lt";
request(pageToVisit, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   if(response.statusCode === 200) {
     // Parse the document body
     $ = cheerio.load(body);
     c = $('.CBarticleTitle');
  
     for(var i in c){
      try{
       var x = c[i].children[0].data.slice(0,8);
	if(x == 'Užkalnis')
          console.log('\n'+c[i].children[0].data);
      }
         catch{  }
         

      }
console.log('\n');
   }
});


