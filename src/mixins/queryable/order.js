(function () {
  'use strict';

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

  module.exports = function order(member, dir) {
    var sortDirection = getSortDirection(dir) || 'asc';

    this.queryable.order = {
      member: member,
      sortDirection: sortDirection
    };

    return this;
  };

})();
