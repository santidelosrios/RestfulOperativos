/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var app      = express();
var port     = process.env.PORT || 8091;

// Configuration
app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('The App runs on port ' + port);
app.post('/sendFile', function(req, res) {
	res.send("WHEEE");
});