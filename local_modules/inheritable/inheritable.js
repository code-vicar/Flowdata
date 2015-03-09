(function () {
  'use strict';

  var _ = require('lodash');
  var forEachOwnKey = require('@/local_modules/utils').forEachOwnKey;

  var Inheritable = {
    class: {

      subClass: function (protoProps, staticProps) {
        var Child, parent = this;

        if (protoProps && _.has(protoProps, 'constructor')) {
          Child = protoProps.constructor;
        } else {
          Child = function () {
            return parent.apply(this, arguments);
          };
        }

        /** apply parent static properties */
        forEachOwnKey(parent, function (key) {
          if (key !== 'prototype') {
            Child[key] = parent[key];
          }
        });

        /** Apply static properties argument to the Child */
        if (_.isPlainObject(staticProps)) {
          forEachOwnKey(staticProps, function (key) {
            if (key !== 'prototype') {
              Child[key] = staticProps[key];
            }
          });
        }

        /** subClass the Child with the parent's prototype */
        Child.prototype = Object.create(parent.prototype);

        /** Set the "constructor" property to refer to the Child constructor */
        Child.prototype.constructor = Child;

        /** Apply prototype properties to the subclass */
        if (_.isPlainObject(protoProps)) {
          forEachOwnKey(protoProps, function (key) {
            if (key !== 'constructor') {
              Child.prototype[key] = protoProps[key];
            }
          });
        }

        /** Set a convenience property to the parent. */
        Child._progenitor = parent;

        return Child;
      }
    },
    proto: {

    }
  };

  module.exports = Inheritable;
})();
