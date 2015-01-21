(function () {
  'use strict';

  var Predicate = require('./predicate.js');

  module.exports = Predicate.subClass({
    constructor: function ge() {
      Predicate.apply(this, arguments);
    }
  });

})();
