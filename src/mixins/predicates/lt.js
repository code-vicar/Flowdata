(function () {
  'use strict';

  var Predicate = require('./predicate.js');

  module.exports = Predicate.subClass({
    constructor: function lt() {
      Predicate.apply(this, arguments);
    }
  });

})();
