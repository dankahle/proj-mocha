

var concat = require('concat-stream'),
	stream = require('stream')

var r = new stream.Duplex({objectMode: true})
r._write = function(chunk, end, cb) {
	cb();
}
w.write({name:'dank'})
w.write({name: 'carl'})
w.write(null);

r.pipe(concat({encoding:'object'}, function(data) {
	console.log(data)
})).on('error', function(err) {
	console.error(err)
	process.exit(5)
})
