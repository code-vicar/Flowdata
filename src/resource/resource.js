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
    if (typeof name !== 'string' || name.length <= 0) {
      throw new TypeError('Expected a non empty string');
    }
    this.name = name;
  };

  module.exports = Resource;

  var Inheritable = _rootRequire('mixins/inheritable.js');
  var Queryable = _rootRequire('mixins/queryable.js');
  var mix = _rootRequire('utils/mix.js');

  Resource = mix(Resource, Inheritable);
  Resource = mix(Resource, Queryable);
})();
