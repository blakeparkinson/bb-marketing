'use strict';

var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var gutil = require('gulp-util');
const babel = require('gulp-babel');

gulp.task('dist', function () {
    return gulp.src('assets/javascripts/*.js')
        // .pipe(babel({
        //     presets: ['env']
        // }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('css', function () {
    return gulp.src(['assets/stylesheets/*.css', 'assets/stylesheets/bootstrap/*.css'])
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest('dist/'));
});