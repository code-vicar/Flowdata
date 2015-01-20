(function () {
  'use strict';

  var _ = require('lodash');
  // var predicates = require('./predicates.js');
  // var canonicalFunctions = require('./canonicalFunctions.js');
  // var groups = require('./groups.js');

  module.exports = function where(clause) {

    if (!_.isPlainObject(clause)) {
      throw new TypeError('Expected clause to be an object');
    }

    // if (groups.match(clause)) {
    //   // create a new group
    //   console.log('group');
    // } else if (predicates.match(clause)) {
    //   // add a predicate
    //   console.log('predicate');
    // } else if (canonicalFunctions.match(clause)) {
    //   // add a canonical function
    //   console.log('canonical function');
    // }

    return this;
  };

})();
