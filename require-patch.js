// require patch
// inspired from https://gist.github.com/ivan-kleshnin/edfa4abefe8ce216b9fa
(function () {
  'use strict';

  var Module = require('module');
  var originalRequire = Module.prototype.require;

  module.exports = {
    install: function installLocalRequires(projectRoot, options) {
      Module.prototype.require = function (path) {
        if (options && options.verbose) {
          console.log('unresolvedPath:', path);
        }
        var resolvedPath = path.replace(/^@/, projectRoot);
        if (options.verbose) {
          console.log('resolvedPath:  ', resolvedPath);
        }
        return originalRequire(resolvedPath);
      };
    },
    uninstall: function uninstallLocalRequires() {
      Module.prototype.require = originalRequire;
    }
  };
})();
