(function () {
  'use strict';

  module.exports = function skip(number) {
    if (typeof number !== 'number' || isNaN(number) || number < 0) {
      throw new TypeError('Expected a positive integer');
    }

    this.queryable.skip = number;
    return this;
  };

})();
