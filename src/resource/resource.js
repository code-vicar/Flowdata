/**
 * Resource module
 * @module sunglass/resource
 * @requires module:sunglass/mixins/inheritable
 * @requires module:sunglass/mixins/queryable
 */

(function () {
  'use strict';

  var Inheritable = require.main.require('mixins/inheritable.js');
  var Queryable = require.main.require('mixins/queryable');
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
  _.mixin(Resource, Queryable);

  module.exports = Resource;
})();
