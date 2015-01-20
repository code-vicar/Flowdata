(function () {
  'use strict';

  module.exports = function top(number) {
    if (typeof number !== 'number' || isNaN(number) || number < 0) {
      throw new TypeError('Expected a positive integer');
    }

    this.queryable.top = number;
    return this;
  };

})();
