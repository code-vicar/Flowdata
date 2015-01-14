var packageVersion = require('./package.json').version;
var packageName = require('./package.json').name;
var bundleName = packageName + '-' + packageVersion;

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var getBundleName = function () {
  return ;
};

// define tasks here
gulp.task('dist', function () {
  var bundler = browserify({
    entries: ['./src/index.js'],
    standalone: 'flowdata',
    debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source(bundleName+'.js'))
      .pipe(gulp.dest('./dist/'));
  }

  return bundle();
});
