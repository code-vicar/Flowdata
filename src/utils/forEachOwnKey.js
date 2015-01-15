/**
 * Unique module
 * @module sunglass/utils/forEachOwnProperty
 */

(function () {
  'use strict';

  var _ = require('lodash');

  function forEachOwnKeys(obj, cb) {
    var keys = Object.keys(obj);
    _.forEach(keys, function (key) {
      if (_.has(obj, key)) {
        cb(key);
      }
    });
  }

  module.exports = forEachOwnKeys;
})();
