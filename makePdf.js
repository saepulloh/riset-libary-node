var pdf = require('html-pdf');
var requestify = require('requestify');
var externalURL= 'http://www.google.com';
var request = require("request");

request(externalURL, function (error, response, body) {
    if (!error) {
        //console.log(body);
        var html = body; 
   		var config = {format: 'A4'}; // or format: 'letter' - see https://github.com/marcbachmann/node-html-pdf#options

	   //Create the PDF
	   pdf.create(html, config).toFile('generated.pdf', function (err, res) {
	      if (err) return console.log(err);
	      console.log(res); // { filename: '/pathtooutput/generated.pdf' }
	   });
    } else {
        console.log(error);
    }
});


requestify.get(externalURL).then(function (response) {
	console.log("tes");
   // Get the raw HTML response body
   var html = response.body; 
   var config = {format: 'A4'}; // or format: 'letter' - see https://github.com/marcbachmann/node-html-pdf#options

   //Create the PDF
   pdf.create(html, config).toFile('generated.pdf', function (err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/pathtooutput/generated.pdf' }
   });
});