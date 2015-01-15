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
  var forEachOwnKey = _rootRequire('utils/forEachOwnKey.js');

  /**
    @class
    @mixes Inheritable
    @see {@link module:sunglass/mixins/inheritable~Inheritable}
    @mixes Queryable
    @see {@link module:sunglass/mixins/queryable~Queryable}
  */
  var Resource = function Resource() {};
  forEachOwnKey(Inheritable, function (key) {
    Resource[key] = Inheritable[key];
  });

  forEachOwnKey(Queryable, function (key) {
    Resource.prototype[key] = Queryable[key];
  });

  module.exports = Resource;
})();
