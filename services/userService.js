
var http = require('http'),
	concat = require('concat-stream')

module.exports.getUsers = function(cb) {
	http.get('http://localhost:3000/api/users', function(res) {
		res.pipe(concat({encoding: 'string'}, function(data) {
			var users = JSON.parse(data);
			cb(null, users);
		}))
	})
}
