//gulpfile.sj
'use strict';

////////////////////////////////////////////////////////////////////////////////
// Packages
////////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
//var reload      = browserSync.reload;

////////////////////////////////////////////////////////////////////////////////
// Directories
////////////////////////////////////////////////////////////////////////////////

// name of the development directory
var DEV_DIR = "dev";
var BUILD_DIR = "dist";

////////////////////////////////////////////////////////////////////////////////
// Default task
////////////////////////////////////////////////////////////////////////////////

// the default task will run a development environment
gulp.task('default', ['browser-sync']);

////////////////////////////////////////////////////////////////////////////////
// Other tasks
////////////////////////////////////////////////////////////////////////////////

gulp.task('jshint-gulpfile', function () {
    var jsGlob =  "./gulpfile.js";
    return gulp.src(jsGlob)
        .pipe(jshint({ 'node': true }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js', function () {
    var jsGlob =  "./" + DEV_DIR + "/js/*.js";
    return gulp.src(jsGlob)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// TODO still need to implement the sass watch functionality
gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});
// end todo

gulp.task('html-watch', function () {
    var htmlGlob =  "./" + DEV_DIR + "/*.html";
    gulp.watch(htmlGlob).on('change', browserSync.reload);
});

gulp.task('js-watch', ['js'], function () {
    var jsGlob =  "./" + DEV_DIR + "/js/*.js";
    gulp.watch(jsGlob).on('change', browserSync.reload);
});

gulp.task('browser-sync', ['html-watch', 'js-watch'], function() {
    browserSync.init({
        server: {
            baseDir: "./" + DEV_DIR + "/"
        }
    });
});
