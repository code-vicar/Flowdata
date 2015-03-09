// patch the require module to allow loading relative to root with the '@' symbol
var patch = require('./require-patch.js');
patch.install(__dirname, {
  verbose: true
});

var flowdata = require('./lib/flowdata');

module.exports = flowdata;
