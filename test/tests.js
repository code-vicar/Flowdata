(function () {
  'use strict';
  /* global describe */
  /* global it */
  /* global before */
  var flowdata = require('../');
  var assert = require('assert');

  var testServiceUrl = 'http://services.odata.org/V4/(S(xloriihm0m3y04qekvvc3xg3))/TripPinServiceRW';

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

    describe('fetch metadata', function () {
      var service;
      before(function (done) {
        flowdata.init(testServiceUrl).then(function (_service_) {
          service = _service_;
          done();
        });
      });

      it('service exposes serviceUrl', function () {
        assert.notStrictEqual(service, null);
        assert.notStrictEqual(typeof service, 'undefined');
        assert.strictEqual(service.serviceUrl, testServiceUrl);
      });

      it('service exposes metadata', function () {
        assert.notStrictEqual(service, null);
        assert.notStrictEqual(typeof service, 'undefined');
        assert.strictEqual(typeof service.metadata, 'object');
      });
    });

    it('fetch metadata via options', function (done) {
      flowdata.init({
        serviceUrl: testServiceUrl
      }).then(function (service) {
        assert.notStrictEqual(service, null);
        assert.notStrictEqual(typeof service, 'undefined');
        assert.strictEqual(typeof service.metadata, 'object');
        done();
      });
    });

    it('accept pre-fetched metadata object', function (done) {
      flowdata.init({
        serviceUrl: testServiceUrl,
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

  describe('logging facility', function () {
    it('expose logging property', function () {
      assert.strictEqual(typeof flowdata.logging, 'object');
    });

    it('can change log level', function () {
      flowdata.logging.logLevel = flowdata.logging.logLevels.debug;
      assert.equal(flowdata.logging.logLevel, flowdata.logging.logLevels.debug);
    });
  });
})();
