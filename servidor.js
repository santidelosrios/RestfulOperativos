/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var app      = express();
var port     = process.env.PORT || 8091;
var bodyParser = require('body-parser');

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.listen(port);

console.log('The App runs on port ' + port);

var file = "";
var fs = require('fs');
var exec = require('child_process').exec;
var child;
app.post('/sendFile', function(request, response){
 	response.send(request.body);    // echo the result back
 	file = request.body.data;
 	 //console.log(file);      // your JSON
	fs.writeFile('script.js',file, function (err) {
	  if (err) return console.log(err);
	  console.log('script > script.js');
	});
	child = exec('node script.js',
	    function (error, stdout, stderr) {
	        console.log('stdout: ' + stdout);
	        console.log('stderr: ' + stderr);
	        if (error !== null) {
	             console.log('exec error: ' + error);
	        }else{
	        	console.log('Successful!')
	        }
	    });
	 child();
});
