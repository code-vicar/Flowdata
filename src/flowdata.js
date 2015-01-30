(function () {
  'use strict';

  var odatajs = require('odatajs').oData;
  if (typeof window !== 'undefined') {
    odatajs = window.odatajs.oData;
  } else {
    odatajs = require('odatajs').oData;
  }

  var Promise = require('bluebird');
  var _ = require('lodash');
  var logging = _flowdata('utils/logging.js');

  var retrieveMetadata = function retrieveMetadata(serviceUrl) {
    return new Promise(function (resolve, reject) {
      var metadataUrl = serviceUrl + '/$metadata';

      var logger = logging.getContext('Flowdata');
      logger.debug('Fetching metadata');

      odatajs.read({
          requestUri: metadataUrl,
          headers: {
            Accept: 'application/xml',
            'OData-MaxVersion': '4.0'
          }
        },
        resolve,
        reject,
        odatajs.metadataHandler
      );
    });
  };

  var Flowdata = function Flowdata(serviceUrl, metadata) {
    this.serviceUrl = serviceUrl;
    this.metadata = metadata;
  };

  Flowdata.prototype.retrieveMetadata = retrieveMetadata;

  Flowdata.prototype.generateModels = function generateModels() {
    var logger = logging.getContext('Flowdata.generateModels');
    logger.debug('Generating models');
  };

  module.exports = {
    init: function (options) {
      var serviceUrl;
      var metadata;
      if (typeof options === 'string') {
        serviceUrl = options;
      } else if (_.isPlainObject(options)) {
        if (typeof options.serviceUrl === 'string') {
          serviceUrl = options.serviceUrl;
        }
        if (typeof options.metadata === 'object') {
          metadata = options.metadata;
        }
      }

      if (!serviceUrl) {
        return Promise.reject('Must provide a serviceUrl');
      }

      var prom = Promise.resolve({
        serviceUrl: serviceUrl,
        metadata: metadata
      });
      if (!metadata) {
        prom = retrieveMetadata(serviceUrl).then(function (metadata) {
          return new Flowdata(serviceUrl, metadata);
        });
      }

      return prom;
    }
  };

})();
