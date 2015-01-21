(function () {
  'use strict';

  var Predicate = require('./predicate.js');

  module.exports = Predicate.subClass({
    constructor: function Has() {
      Predicate.apply(this, arguments);
    }
  });

})();
