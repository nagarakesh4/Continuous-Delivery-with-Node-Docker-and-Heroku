//load express module
var express = require('express');
var app = express()

//HTTP Requests
app.get('/', function(req, res){
	console.log("running in docker")
	res.send('Hello World Venkata, this build is deployed in app.buddyworks which pushes to docker hub and also triggers heroku build, the other is  in CloudFoundry')
})

//launch listenening on port 8191
app.listen(process.env.PORT || 8192, function(){
	console.log('listening on port ' + process.env.PORT + ' or 8192');
})
