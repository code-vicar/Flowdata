(function () {
  'use strict';
  /* global describe */
  /* global it */
  var flowdata = require('../src/index.js');
  var assert = require('assert');

  describe('Create a new service', function () {
    it('it should fetch metadata', function (done) {
      flowdata.init('http://services.odata.org/V4/(S(xloriihm0m3y04qekvvc3xg3))/TripPinServiceRW').then(function (service) {
        assert.notStrictEqual(service, null);
        assert.notStrictEqual(typeof service, 'undefined');
        assert.strictEqual(typeof service.metadata, 'object');
        done();
      });
    });
  });
})();
