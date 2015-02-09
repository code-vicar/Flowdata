(function () {
  'use strict';

  var Predicate = require('./predicate.js');

  module.exports = Predicate.subClass({
    constructor: function eq() {
      Predicate.apply(this, arguments);
    }
  });

})();
