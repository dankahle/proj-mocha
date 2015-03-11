'use strict';

var projmocha = require('../');

describe('projmocha1', function () {

  xit('should be awesome', function () {
    projmocha().should.equal('awesome');
  });

});

describe('projmocha2', function () {

  it('should be awesome', function () {
    projmocha().should.equal('awesome');
  });

});
