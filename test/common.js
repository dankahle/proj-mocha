
global.chai = require("chai");
global.sinon = require ('sinon');
global.expect = require("chai").expect;
global.request = require('supertest');
chai.use(require("sinon-chai"));
chai.use(require("chai-as-promised"));

global.swallow = function (thrower) {
	try {
		thrower();
	} catch (e) { }
}


