(function () {
  'use strict';

  var Predicate = require('./predicate.js');

  module.exports = Predicate.subClass({
    constructor: function ne() {
      Predicate.apply(this, arguments);
    }
  });

})();
