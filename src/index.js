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
  var Enumerable = require('./enums/enumerable.js');

  exports.Resource = Resource;
  exports.Mixins = {
    Inheritable: Inheritable,
    Queryable: Queryable
  };
  exports.Utils = {
    unique: unique,
    forEachOwnKey: forEachOwnKey,
    mix: mix
  };
  exports.Enums = {
    Enumerable: Enumerable
  };
})();
