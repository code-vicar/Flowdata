(function () {
  'use strict';

  var Predicate = require('./predicate.js');

  module.exports = Predicate.subClass({
    constructor: function le() {
      Predicate.apply(this, arguments);
    }
  });

})();
