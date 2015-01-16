/**
 * Enumerable module
 * @module flowdata/enums/enumerable
 * @requires module:flowdata/mixins/inheritable
 * @requires module:flowdata/utils/mix
 */

(function () {
  'use strict';

  var Inheritable = _rootRequire('mixins/inheritable.js');
  var mix = _rootRequire('utils/mix.js');

  /**
   * @class An enum
   * @mixes Inheritable
   * @see {@link module:flowdata/mixins/inheritable~Inheritable}
   */
  var Enumerable = function Enumerable() {};

  Enumerable = mix(Enumerable, Inheritable);

  module.exports = Enumerable;
})();
