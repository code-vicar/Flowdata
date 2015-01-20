(function () {
  'use strict';

  var Resource = _rootRequire('resource/resource.js');

  module.exports = function expand(resource) {
    if (!(resource instanceof Resource)) {
      throw new TypeError('Expected an instance of Resource');
    }

    this.queryable.expand = this.queryable.expand || [];

    var i = 0,
      len = this.queryable.expand.length;
    for (i = 0; i < len; i++) {
      if (this.queryable.expand[i].name === resource.name) {
        throw new Error('Already expanded on that property');
      }
    }

    this.queryable.expand.push(resource);
    return this;
  };

})();
