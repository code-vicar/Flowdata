/**
* Resource module
* @module sunglass/resource
* @requires module:sunglass/mixins/inheritable
*/

var Inheritable = require('../mixins/inheritable.js');
var _ = require('underscore');

/**
  @class
  @mixes Inheritable
  @see {@link module:sunglass/mixins/inheritable~Inheritable}
*/
var Resource = function Resource() {};

_.extend(Resource, Inheritable);

module.exports = Resource;
