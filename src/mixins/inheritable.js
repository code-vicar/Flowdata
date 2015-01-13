/**
 * Inheritable module
 * @module sunglass/mixins/inheritable
 */

var _ = require('underscore');

/**
 * Mixin for adding inheritance to classes
 * @mixin Inheritable
 */
var Inheritable = {
  /**
  * Creates a class by inheriting from the applied context (value of 'this')
  *
  * @param {object=} protoProps The properties and methods to add/override on the inherited class.
  * If a property named 'constructor' is provided, that will be used as the constructor for the
  * new class
  * @param {object=} staticProps Static properties and methods.
  * @returns {class}
  */
  endow: function (protoProps, staticProps) {
    'use strict';

    var parent = this;
    var child;

    /**
     * The constructor function for the new subclass is either defined
     * in protoProps as 'constructor' or the parent constructor is applied
     */
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
      delete protoProps.constructor;
    } else {
      child = function () {
        return parent.apply(this, arguments);
      };
    }

    /** Apply static properties to the child */
    if (typeof staticProps === 'object') {
      _.extend(child, parent, staticProps);
    }

    /** endow the child with the parent's prototype */
    child.prototype = Object.create(parent.prototype);

    /** Set the "constructor" property to refer to the child constructor */
    child.prototype.constructor = child;

    /** Apply prototype properties to the subclass */
    if (typeof protoProps === 'object') {
      _.extend(child.prototype, protoProps);
    }

    /** Set a convenience property in case the parent's prototype is needed later. */
    child._super = parent;

    /** Expose further inheritance */
    child.endow = Inheritable.endow;

    return child;
  }
}

module.exports = Inheritable;
