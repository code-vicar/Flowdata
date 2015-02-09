(function () {
  'use strict';

  var _ = require('lodash');
  var unique = require('flowdata_utils').unique;

  var isNullOrUndefined = function isNullOrUndefined(value) {
    return (_.isNull(value) || _.isUndefined(value));
  };

  module.exports = function select(members) {
    this.queryable.select = this.queryable.select || [];

    if (isNullOrUndefined(members)) {
      return this;
    }

    if (!_.isArray(members)) {
      members = [members];
    }

    this.queryable.select = unique(this.queryable.select.concat(members));
    return this;
  };

})();
