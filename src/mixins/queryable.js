/**
 * Queryable module
 * @module sunglass/mixins/queryable
 */

(function () {
  'use strict';

  var _ = require('lodash');
  var unique = require.main.require('utils/unique');

  var isNullOrUndefined = function isNullOrUndefined(value) {
    return (_.isNull(value) || _.isUndefined(value));
  };

  var getSortDirection = function getSortDirection(dir) {
    var directions = {
      'a': 'asc',
      'asc': 'asc',
      'ascending': 'asc',
      'd': 'desc',
      'desc': 'desc',
      'descending': 'desc'
    };

    return directions[dir];
  };

  var initialize = function initialize() {
    if (isNullOrUndefined(this.queryable) || !_.isPlainObject(this.queryable)) {
      this.queryable = {};
    }
  };

  /**
   * Mixin for adding inheritance to classes
   * @mixin
   */
  var Queryable = {
    where: function where(clause) {
      initialize.call(this);
      console.log(clause);

      return this;
    },

    order: function order(member, dir) {
      initialize.call(this);

      var sortDirection = getSortDirection(dir) || 'asc';

      this.queryable.order = {
        member: member,
        sortDirection: sortDirection
      };

      return this;
    },

    select: function select(members) {
      initialize.call(this);
      this.queryable.select = this.queryable.select || [];

      if (isNullOrUndefined(members)) {
        return this;
      }

      if (!_.isArray(members)) {
        members = [members];
      }

      this.queryable.select = unique(this.queryable.select.concat(members));

      return this;
    },

    top: function top() {
      initialize.call(this);
      return this;
    },

    skip: function skip() {
      initialize.call(this);
      return this;
    }
  };


  module.exports = Queryable;
})();
