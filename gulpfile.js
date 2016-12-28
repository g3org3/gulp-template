'use strict';

var pug = require('gulp-pug');
var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload')
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");

gulp.task('views', function buildHTML() {
  return gulp.src('src/views/*.pug')
  .pipe(pug({}))
  .pipe(gulp.dest('dist/'))
});

gulp.task('copy:images', function () {
  return gulp.src('src/images/*')
  .pipe(gulp.dest('dist/images/'))
})

gulp.task('copy:libs', function () {
  return gulp.src('src/libs')
  .pipe(gulp.dest('dist/'))
})

gulp.task('sass', function () {
  return gulp.src('src/styles/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('dist/js/'))
})

gulp.task('sass:watch', function () {
  gulp.watch('src/styles/*.sass', ['sass']);
});
gulp.task('views:watch', function () {
  gulp.watch('src/views/*.pug', ['views']);
});
gulp.task('js:watch', function () {
  gulp.watch('src/js/*.js', ['js'])
});

gulp.task('build', ['views', 'sass', 'js']);
gulp.task('watch', ['views:watch', 'sass:watch', 'js:watch']);

gulp.task('default', ['watch'], function () {
  gulp.src('./dist')
    .pipe(server({
      livereload: {
        enable: true
      },
      defaultFile: './index.html',
      // directoryListing: true,
      open: true
    }));
});
