/**
 * Unique module
 * @module flowdata/utils/mix
 * @requires module:flowdata/utils/forEachOwnKey
 */

(function () {
  'use strict';

  var _ = require('lodash');
  var forEachOwnKey = _flowdata('utils/forEachOwnKey.js');

  function mix(target, mixin) {
    if (!_.isObject(target)) {
      throw new TypeError('Expected target to be an object');
    }
    if (!_.isPlainObject(mixin)) {
      throw new TypeError('Expected mixin to be an object');
    }

    if (_.isFunction(mixin.init)) {
      target.prototype.init = target.prototype.init || [];
      target.prototype.init.push(mixin.init);
    }

    if (_.isPlainObject(mixin.class)) {
      forEachOwnKey(mixin.class, function (key) {
        target[key] = mixin.class[key];
      });
    }

    if (_.isPlainObject(mixin.proto)) {
      forEachOwnKey(mixin.proto, function (key) {
        target.prototype[key] = mixin.proto[key];
      });
    }

    return target;
  }

  module.exports = mix;
})();
