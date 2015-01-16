/**
 * Unique module
 * @module flowdata/utils/mix
 * @requires module:flowdata/utils/forEachOwnKey
 */

(function () {
  'use strict';

  var _ = require('lodash');
  var forEachOwnKey = _rootRequire('utils/forEachOwnKey.js');

  function mix(target, mixin) {
    if (!_.isPlainObject(mixin) || !_.isPlainObject(mixin.class) || !_.isPlainObject(mixin.proto)) {
      throw new TypeError('Expected mixin to be an object with "class" and "proto" properties');
    }
    forEachOwnKey(mixin.class, function (key) {
      target[key] = mixin.class[key];
    });
    forEachOwnKey(mixin.proto, function (key) {
      target.prototype[key] = mixin.proto[key];
    });

    return target;
  }

  module.exports = mix;
})();
