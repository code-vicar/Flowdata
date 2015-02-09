(function () {
  'use strict';
  /* global describe */
  /* global it */
  var flowdata = require('../');
  var assert = require('assert');

  describe('Create a new service', function () {
    it('require a service url', function (done) {
      flowdata.init().catch(function (err) {
        assert.strictEqual(err, 'Must provide a serviceUrl');
        done();
      });
    });

    it('require a service url via options', function (done) {
      flowdata.init({
        metadata: {}
      }).catch(function (err) {
        assert.strictEqual(err, 'Must provide a serviceUrl');
        done();
      });
    });

    it('fetch metadata', function (done) {
      flowdata.init('http://services.odata.org/V4/(S(xloriihm0m3y04qekvvc3xg3))/TripPinServiceRW').then(function (service) {
        assert.notStrictEqual(service, null);
        assert.notStrictEqual(typeof service, 'undefined');
        assert.strictEqual(typeof service.metadata, 'object');
        done();
      });
    });

    it('fetch metadata via options', function (done) {
      flowdata.init({
        serviceUrl: 'http://services.odata.org/V4/(S(xloriihm0m3y04qekvvc3xg3))/TripPinServiceRW'
      }).then(function (service) {
        assert.notStrictEqual(service, null);
        assert.notStrictEqual(typeof service, 'undefined');
        assert.strictEqual(typeof service.metadata, 'object');
        done();
      });
    });

    it('accept pre-fetched metadata object', function (done) {
      flowdata.init({
        serviceUrl: 'http://services.odata.org/V4/(S(xloriihm0m3y04qekvvc3xg3))/TripPinServiceRW',
        metadata: {
          test: 'hi'
        }
      }).then(function (service) {
        assert.notStrictEqual(service, null);
        assert.notStrictEqual(typeof service, 'undefined');
        assert.strictEqual(typeof service.metadata, 'object');
        assert.strictEqual(service.metadata.test, 'hi');
        done();
      });
    });
  });
})();
