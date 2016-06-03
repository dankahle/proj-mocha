

var express = require('express'),
	http = require('http'),
	Q = require('q'),
	deferred = Q.defer(),
	users = [
		{name: 'dank', age: 50},
		{name: 'carl', age: 60},
	];

var app = express();

app.get('/user', function(req, res) {
	res.send(users);
})

app.use(function(req, res) {
	res.status(404).json({
		error: 'not found'
	})
})

var port = 3002;
var server = http.createServer(app);

server.listen(port, function(err) {
	if (err)
		deferred.reject(err);
	console.log('listening on ' + port);
	deferred.resolve(server);
})

module.exports = deferred.promise;

