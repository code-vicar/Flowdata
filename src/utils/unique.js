/**
 * Unique module
 * @module sunglass/utils/unique
 */

(function () {
  'use strict';

  var _ = require('lodash');

  function unique(arr, comparator) {
    if (!_.isArray(arr)) {
      throw new TypeError('Expected an array');
    }

    if (typeof comparator !== 'function') {
      comparator = function (a, b) {
        return a === b;
      };
    }

    var i, j;
    for (i = 0; i < arr.length; i++) {
      for (j = i + 1; j < arr.length; j++) {
        if (comparator(arr[i], arr[j])) {
          arr.splice(j, 1);
        }
      }
    }

    return arr;
  }

  module.exports = unique;
})();
