  (function () {
    'use strict';

    var EQ = require('./eq.js');
    var NE = require('./ne.js');
    var GT = require('./gt.js');
    var GE = require('./ge.js');
    var LT = require('./lt.js');
    var LE = require('./le.js');
    var Has = require('./has.js');

    module.exports = {
      proto: {
        'eq': function eq() {
          return new EQ(arguments);
        },
        'ne': function ne() {
          return new NE(arguments);
        },
        'gt': function gt() {
          return new GT(arguments);
        },
        'ge': function ge() {
          return new GE(arguments);
        },
        'lt': function lt() {
          return new LT(arguments);
        },
        'le': function le() {
          return new LE(arguments);
        },
        'has': function has() {
          return new Has(arguments);
        }
      }
    };
  })();
