/**
 * Queryable module
 * @module flowdata/mixins/queryable
 * @requires module:flowdata/utils/unique
 * @requires module:flowdata/resource
 */

(function () {
  'use strict';

  var _ = require('lodash');
  var unique = _rootRequire('utils/unique.js');
  var Resource = _rootRequire('resource/resource.js');

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
   * @mixin Queryable
   */
  var Queryable = {
    class: {

    },
    proto: {
      where: function where(clause) {
        initialize.call(this);
        console.log(clause);
        return this;
      },

      expand: function expand(resource) {
        initialize.call(this);
        if (!(resource instanceof Resource)) {
          throw new TypeError('Expected an instance of Resource');
        }

        this.queryable.expand = this.queryable.expand || [];

        var i = 0, len = this.queryable.expand.length;
        for (i = 0; i < len; i++) {
          if (this.queryable.expand[i].name === resource.name) {
            throw new Error('Already expanded on that property');
          }
        }

        this.queryable.expand.push(resource);
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

      top: function top(number) {
        initialize.call(this);
        if (typeof number !== 'number' || isNaN(number) || number < 0) {
          throw new TypeError('Expected a positive integer');
        }

        this.queryable.top = number;
        return this;
      },

      skip: function skip(number) {
        initialize.call(this);
        if (typeof number !== 'number' || isNaN(number) || number < 0) {
          throw new TypeError('Expected a positive integer');
        }

        this.queryable.skip = number;
        return this;
      }
    }
  };


  module.exports = Queryable;
})();
