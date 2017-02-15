var gulp   = require('gulp');
var sass   = require('gulp-sass');
var config = require('../../config/configuration').getConfig();

// Compile component .scss into .css files.
// .css files are created in their origin directories.
gulp.src(config.rootDir + '/web/components/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(function (file) {
    return file.base;
  }));

// Compile page .scss into .css files.
// .css files are created in their origin directories.
gulp.src(config.rootDir + '/web/pages/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(function (file) {
    return file.base;
  }));
