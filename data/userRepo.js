

var users = [
  {id: 1, name: 'dank', age: 50},
  {id: 2, name: 'carl', age: 60}
]

function getOneByName(name) {
	var arr = users.filter(function(v) {
		return v.name == name;
	});
	if(arr.length > 0)
		return arr[0];
	else
		throw new Error('not found')
}

function getOneByNameAsync(name, cb) {
	setTimeout(function() {
		var arr = users.filter(function(v) {
			return v.name == name;
		});
		cb(null, arr.length? arr[0]: null);
	})
}

module.exports = {
	getOneByName: getOneByName,
	getOneByNameAsync: getOneByNameAsync
}
