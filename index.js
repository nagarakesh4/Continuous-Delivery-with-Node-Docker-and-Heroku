//load express module
var express = require('express');
var app = express()

//HTTP Requests
app.get('/', function(req, res){
	console.log("running in docker")
	res.send('Hello World Venkata in heroku')
})

//launch listenening on port 8191
app.listen(8192, function(){
	console.log('listening on port 8192')
})
