(function () {
  'use strict';

  var flowdata = require('../');

  var program = require('commander');

  program
    .version('0.1.10')
    .usage('[options] <metadata url>')
    .option('-o, --out <filename>', 'output filename (flowdata.js)')
    .option('-g, --global <name>', 'global name (flowdata)')
    .option('-s, --source', 'leave output in source form')
    .option('-m, --minify', 'minify the ouput')
    .parse(process.argv);

  if (typeof program.args === 'undefined' || program.args === null || program.args.length < 1) {
    console.log('Missing argument, see usage with --help');
    return;
  }

  flowdata.generate(program.args[0], {
    out: program.out,
    global: program.global,
    source: program.source,
    minify: program.minify
  }).then(function () {
    console.log('finished');
  });

})();
