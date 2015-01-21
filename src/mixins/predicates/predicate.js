(function () {
  'use strict';

  var Predicate = function Predicate () {};

  module.exports = Predicate;

  var Inheritable = _flowdata('mixins/inheritable.js');
  var mix = _flowdata('utils/mix.js');

  mix(Predicate, Inheritable);

})();
