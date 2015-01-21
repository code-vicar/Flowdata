/**
 * Resource module
 * @module flowdata/resource
 * @requires module:flowdata/mixins/inheritable
 * @requires module:flowdata/mixins/queryable
 * @requires module:flowdata/utils/mix
 */

(function () {
  'use strict';

  /**
   * Represents an odata resource
   * @class
   * @mixes Inheritable
   * @see {@link module:flowdata/mixins/inheritable~Inheritable}
   * @mixes Queryable
   * @see {@link module:flowdata/mixins/queryable~Queryable}
   * @param {string} name The name of the resource as it appears in the odata service
   */
  var Resource = function Resource(name) {
    var args = arguments;
    var self = this;

    if (typeof name !== 'string' || name.length <= 0) {
      throw new TypeError('Expected a non empty string');
    }
    this.name = name;

    // exec mixin initializations
    if (this.init) {
      this.init.forEach(function (init) {
        init.apply(self, args);
      });
    }
  };

  module.exports = Resource;

  var Inheritable = _flowdata('mixins/inheritable.js');
  var Queryable = _flowdata('mixins/queryable');
  var mix = _flowdata('utils/mix.js');

  mix(Resource, Inheritable);
  mix(Resource, Queryable);
})();
