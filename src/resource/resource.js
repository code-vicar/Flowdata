/**
 * Resource module
 * @module sunglass/resource
 * @requires module:sunglass/mixins/inheritable
 * @requires module:sunglass/mixins/queryable
 */

(function () {
  'use strict';

  var Inheritable = _rootRequire('mixins/inheritable.js');
  var Queryable = _rootRequire('mixins/queryable.js');
  var mix = _rootRequire('utils/mix.js');

  /**
    @class
    @mixes Inheritable
    @see {@link module:sunglass/mixins/inheritable~Inheritable}
    @mixes Queryable
    @see {@link module:sunglass/mixins/queryable~Queryable}
  */
  var Resource = function Resource() {};

  Resource = mix(Resource, Inheritable);
  Resource = mix(Resource, Queryable);

  module.exports = Resource;
})();
