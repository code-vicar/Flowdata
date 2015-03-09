(function () {
  'use strict';

  var Predicate = function Predicate() {};

  module.exports = Predicate;

  var inheritable = require('@/local_modules/inheritable');
  var mix = require('@/local_modules/utils').mix;

  mix(Predicate, inheritable);

})();
