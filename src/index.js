(function () {
  'use strict';

  global._flowdata = function(module) {
    return require('./' + module);
  };

  var Resource = require('./resource/resource.js');

  var Inheritable = require('./mixins/inheritable.js');
  var Queryable = require('./mixins/queryable');

  var unique = require('./utils/unique.js');
  var forEachOwnKey = require('./utils/forEachOwnKey.js');
  var mix = require('./utils/mix.js');
  var logging = require('./utils/logging.js');

  var Enumerable = require('./enums/enumerable.js');

  var Flowdata = require('./flowdata.js');


  Flowdata.Resource = Resource;
  Flowdata.Mixins = {
    Inheritable: Inheritable,
    Queryable: Queryable
  };
  Flowdata.Utils = {
    unique: unique,
    forEachOwnKey: forEachOwnKey,
    mix: mix,
    logging: logging
  };
  Flowdata.Enums = {
    Enumerable: Enumerable
  };

  module.exports = Flowdata;
})();
