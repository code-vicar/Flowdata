(function () {
  'use strict';

  var _ = require('lodash');
  var Promise = require('bluebird');
  var odatajs = require('odatajs').oData;
  var logging = require('local_modules/logging');

  var Resource = require('./resource/resource.js');


  var Flowdata = function Flowdata(serviceUrl, metadata) {
    var flowdata = this;

    flowdata.serviceUrl = serviceUrl;
    flowdata.metadata = metadata;
    flowdata.version = metadata.version;

    flowdata.db = {};

    var schemas = metadata.dataServices.schema;

    schemas.forEach(function (schema) {
      schema.entityType.forEach(function (entityType) {
        flowdata.db[schema.namespace] = flowdata.db[schema.namespace] || {};
        flowdata.db[schema.namespace][entityType.name] = flowdata.db[schema.namespace][entityType.name] || {};
        entityType.property.forEach(function (property) {
          flowdata.db[schema.namespace][entityType.name][property.name] = new Resource(entityType.name);
        });
      });
    });
  };

  var retrieveMetadata = function retrieveMetadata(serviceUrl) {
    return new Promise(function (resolve, reject) {
      var metadataUrl = serviceUrl + '/%24metadata';

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

  var init = function (options) {
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
  };

  Flowdata.prototype.retrieveMetadata = retrieveMetadata;

  module.exports = {
    init: init,
    retrieveMetadata: retrieveMetadata,
    generate: function (url, options) {
      console.log(url, options);
      return Promise.resolve('WIP');
    },
    logging: logging
  };

})();
