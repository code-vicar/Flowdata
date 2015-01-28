(function () {
  'use strict';

  var odatajs = require('odatajs').oData;
  var Promise = require('bluebird');

  var logging = _flowdata('utils/logging');

  var Flowdata = function Flowdata(serviceUrl) {
    var flowdata = this;

    var logger = logging.getContext('Flowdata');
    logger.debug('Fetching metadata');

    this.serviceUrl = serviceUrl;
    this.ready = this.retreiveMetadata(serviceUrl).then(function (metadata) {
      logger.debug('Metadata fetched');
      flowdata.metadata = metadata;
    });
  };

  Flowdata.prototype.retreiveMetadata = function retreiveMetadata(serviceUrl) {
    return new Promise(function (resolve, reject) {
      var metadataUrl = serviceUrl + '/$metadata';

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

  Flowdata.prototype.generateModels = function generateModels() {
    var flowdata = this;

    var logger = logging.getContext('Flowdata.generateModels');

    return flowdata.ready.then(function () {
      logger.debug('Generating models');
    });
  };

  module.exports = Flowdata;

})();
