(function () {
  'use strict';

  var _ = require('lodash');

  module.exports = function where(clause) {

    if (!_.isPlainObject(clause)) {
      throw new TypeError('Expected clause to be an object');
    }

    this.queryable.clause = this.queryable.clause || [];

    this.queryable.clause.push(clause);

    return this;
  };

})();
