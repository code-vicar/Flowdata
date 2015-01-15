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
  var _ = require('lodash');

  /**
    @class
    @mixes Inheritable
    @see {@link module:sunglass/mixins/inheritable~Inheritable}
    @mixes Queryable
    @see {@link module:sunglass/mixins/queryable~Queryable}
  */
  var Resource = function Resource() {};

  _.mixin(Resource, Inheritable);
  _.mixin(Resource.prototype, Queryable);

  module.exports = Resource;
})();
