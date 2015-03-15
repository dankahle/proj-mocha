var userService = require('../services/userService'),
	http = require('http'),
	stream = require('stream')

describe('misc tests', function () {

	beforeEach(function () {
	})
	afterEach(function () {

	})

	describe('http get test', function () {

		it('should work', function (done) {

			var r = new stream.Readable()
			r.push(JSON.stringify([{name: 'mary', age: 20}]))
			r.push(null);

			var stub = sinon.mock(http, 'get').yields(r);

			userService.getUsers(function (err, users) {
				if (err) throw err;
				mock.expects('get').once().yields(r);
				expect(users[0].name).to.equal('mary')
				mock.verify();
				console.log('here', users)
				done()
			})

		})

	})

	/*
	 describe.skip('get tests', function () {

	 it('should get by name', function () {
	 expect(repo.getOneByName('dank').name).to.equal('dank');
	 })

	 it('should get by name async', function (done) {
	 repo.getOneByNameAsync('dank', function(err, user) {
	 expect(user.name).to.equal('dank');
	 done()
	 })
	 })

	 it('should return null if not found', function() {
	 expect(repo.getOneByName.bind(repo, 'noexist')).to.throw(Error, 'not found')
	 })

	 })
	 */


})


