/**
 * Queryable module
 * @module flowdata/mixins/queryable
 * @requires module:flowdata/utils/unique
 * @requires module:flowdata/resource
 */

(function () {
  'use strict';

  var _ = require('lodash');

  var expand = require('./expand.js');
  var order = require('./order.js');
  var select = require('./select.js');
  var skip = require('./skip.js');
  var top = require('./top.js');
  var where = require('./where.js');

  var isNullOrUndefined = function isNullOrUndefined(value) {
    return (_.isNull(value) || _.isUndefined(value));
  };

  /**
   * Mixin for adding inheritance to classes
   * @mixin Queryable
   */
  var Queryable = {
    init: function() {
      if (isNullOrUndefined(this.queryable) || !_.isPlainObject(this.queryable)) {
        this.queryable = {};
      }
    },
    proto: {
      where: where,

      expand: expand,

      order: order,

      select: select,

      top: top,

      skip: skip
    }
  };

  module.exports = Queryable;
})();
