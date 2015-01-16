var packageName = require('./package.json').name;

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// define tasks here
gulp.task('dist', function () {
  'use strict';
  var bundler = browserify({
    entries: ['./src/index.js'],
    standalone: 'flowdata',
    debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source(packageName+'.js'))
      .pipe(gulp.dest('./dist/'));
  };

  return bundle();
});
