

var userService = require('./services/userService')

userService.getUsers(function(err, users) {
	if(err) throw err.message;
	console.log(users)
})
