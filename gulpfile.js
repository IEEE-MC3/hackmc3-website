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
    var jsGlob =  './gulpfile.js';
    return gulp.src(jsGlob)
        .pipe(jshint({ 'node': true }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js', function () {
    var jsGlob =  './' + DEV_DIR + '/js/*.js';
    return gulp.src(jsGlob)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    var sassGlob = './' + DEV_DIR + '/sass/style.scss';
    var cssDest = './' + DEV_DIR + '/';
    return gulp.src(sassGlob)
        .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

/*
gulp.task('autoprefixer', ['sass'], function () {
    var cssGlob = './' + DEV_DIR + '/style.css';
    return gulp.src(cssGlob)
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(cssGlob));
});*/

gulp.task('html-watch', function () {
    var htmlGlob =  './' + DEV_DIR + '/*.html';
    gulp.watch(htmlGlob).on('change', browserSync.reload);
});

gulp.task('js-watch', ['js'], function () {
    var jsGlob =  './' + DEV_DIR + '/js/*.js';
    gulp.watch(jsGlob).on('change', browserSync.reload);
});

gulp.task('css-watch', function () {
    var cssGlob = './' + DEV_DIR + '/style.scss';
    gulp.watch(cssGlob).on('change', browserSync.reload);
});

gulp.task('sass-watch', function () {
    var sassGlob = './' + DEV_DIR + '/sass/*.scss';
    gulp.watch(sassGlob, ['sass']);
});

gulp.task('browser-sync', ['html-watch', 'js-watch', 'css-watch', 'sass-watch'], function() {
    var baseDirectory = './' + DEV_DIR + '/';
    browserSync.init({
        server: {
            baseDir: baseDirectory
        }
    });
});
