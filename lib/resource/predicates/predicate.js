(function () {
  'use strict';

  var Predicate = function Predicate() {};

  module.exports = Predicate;

  var inheritable = require('flowdata_inheritable');
  var mix = require('flowdata_utils').mix;

  mix(Predicate, inheritable);

})();
