var gulp   = require('gulp');
var sass   = require('gulp-sass');
var config = require('../../config/configuration').getConfig();

gulp.src(config.rootDir + '/web/components/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(function (file) {
    return file.base;
  }));
