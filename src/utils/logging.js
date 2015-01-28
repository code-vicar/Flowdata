(function () {
  'use strict';

  var moment = require('moment');

  /**
   * in order of increasing verbosity
   */
  var logLevels = {
    'error': {
      verbosity: 0,
      label: '[ERROR]'
    },
    'warn': {
      verbosity: 1,
      label: '[WARN]'
    },
    'info': {
      verbosity: 2,
      label: '[INFO]'
    },
    'debug': {
      verbosity: 3,
      label: '[DEBUG]'
    }
  };

  var enhanceLog = function (context, logging, logLevel) {
    return function () {
      if (logging.enabledContexts[context] === true && logLevel.verbosity <= logging.logLevel.verbosity) {
        var args = Array.prototype.slice.call(arguments, 0);

        var prepend = logLevel.label + '::' + context + '@' + moment().format(logging.timeStampFormat);

        args.unshift(prepend);

        console.log.apply(console, args);
      }
    };
  };

  var Logger = function Logger(ctx, logging) {
    var logger = this;
    var keys = Object.keys(logLevels);

    keys.forEach(function (key) {
      logger[key] = enhanceLog(ctx, logging, logLevels[key]);
    });
  };

  var Logging = function Logging(options) {
    var x = function (value) {
      return (typeof value !== 'undefined' && value !== null);
    };

    this.logLevel = logLevels.error;
    this.autoEnableContexts = true;
    this.enabledContexts = {};
    this.timeStampFormat = 'HH:mm:ss';

    this.loggers = {};

    if (x(options)) {
      if (x(options.logLevel)) {
        this.logLevel = options.logLevel;
      }

      if (x(options.autoEnableContexts)) {
        this.autoEnableContexts = options.autoEnableContexts;
      }

      if (x(options.enabledContexts)) {
        this.enabledContexts = options.enabledContexts;
      }
    }
  };

  Logging.prototype.logLevels = logLevels;
  Logging.prototype.enableContext = function enableContext(ctx) {
    this.enabledContexts[ctx] = true;
  };
  Logging.prototype.disableContext = function disableContext(ctx) {
    this.enabledContexts[ctx] = false;
  };
  Logging.prototype.getContext = function getContext(ctx) {
    if (this.autoEnableContexts === true) {
      this.enableContext(ctx);
    }

    // cache this logger
    if (!this.loggers[ctx]) {
      this.loggers[ctx] = new Logger(ctx, this);
    }

    return this.loggers[ctx];
  };

  var logging = new Logging();

  module.exports = logging;

})();
