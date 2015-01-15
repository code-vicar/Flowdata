(function () {
  'use strict';

  var Resource = require('resource/resource.js');
  var Inheritable = require('mixins/inheritable.js');
  var Queryable = require('mixins/queryable.js');
  var unique = require('utils/unique.js');

  exports.Resource = Resource;
  exports.Mixins = {
    Inheritable: Inheritable,
    Queryable: Queryable
  };
  exports.Utils = {
    unique: unique
  };
})();
