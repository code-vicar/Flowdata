(function () {
  'use strict';

  var Resource = function Resource(name) {
    var args = arguments;
    var self = this;

    if (typeof name !== 'string' || name.length <= 0) {
      throw new TypeError('Expected a non empty string');
    }
    this.name = name;

    // exec mixin initializations
    if (this.init) {
      this.init.forEach(function (init) {
        init.apply(self, args);
      });
    }
  };

  module.exports = Resource;

  var inheritable = require('local_modules/inheritable');
  var mix = require('local_modules/utils/mix');

  var queryable = require('./queryable');
  var predicates = require('./predicates');

  mix(Resource, inheritable);
  mix(Resource, queryable);
  mix(Resource, predicates);
})();
