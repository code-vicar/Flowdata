(function () {
  'use strict';

  var odatajs = require('odatajs').oData;
  var Promise = require('bluebird');

  var Flowdata = function Flowdata(serviceUrl) {
    var self = this;
    this.serviceUrl = serviceUrl;
    this.ready = this.retreiveMetadata(serviceUrl).then(function(metadata) {
      self.metadata = metadata;
    });
  };

  Flowdata.prototype.retreiveMetadata = function retreiveMetadata(serviceUrl) {

    return new Promise(function (resolve, reject) {

      var metadataUrl = serviceUrl + '/$metadata';

      odatajs.read({
          requestUri: metadataUrl,
          headers: { Accept: 'application/xml', 'OData-MaxVersion': '4.0' }
        },
        resolve,
        reject,
        odatajs.metadataHandler
      );
    });
  };

  module.exports = Flowdata;

})();
