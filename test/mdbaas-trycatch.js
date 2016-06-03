
var server,
	url = 'http://localhost:3002';

describe('test2 tests', function() {

	before(function(done) {
		require('../server')
			.then(function(_server) {
				server = _server;
				done();
			})
	})

	after(function() {
		server.on('close', function() {
			// console.log('>>>>>>> server closed')
		})
		server.close();
	})

	it('should work', function(done) {
		request(url)
			.get('/user')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				try {
					if (err) {
						throw err;
					}
					var result = JSON.parse(res.text);
					expect(result.Error).to.have.property('Message').eq('One or more required fields failed validation!');
					expect(result.Error).to.have.property('InvalidFields').length(1);
					expect(result.Error.InvalidFields[0]).to.have.property('name').eq('type');
					done();
				}
				catch (e) {
					done(e);
				}
			});



		/*
		request(url)
			.get('/user')
			.expect(300)
			.expect('content-type', 'application/json')
			.expect(function(res) {
				// assert(res.body[0].name === 'danks')
			})
			.end(function(err) {
				if(err) {
					console.log('err', err)
				}
				done();
			})
*/






	})
})
