(function () {
  'use strict';

  var Predicate = require('./predicate.js');

  module.exports = Predicate.subClass({
    constructor: function gt() {
      Predicate.apply(this, arguments);
    }
  });

})();
