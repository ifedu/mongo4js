'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', function (cb) {
    runSequence('compileGulp', 'compileDist', cb);
});

gulp.task('guide', function (cb) {
    runSequence('compileGulp', 'compileGuide', cb);
});

gulp.task('run', function (cb) {
    runSequence('compileGulp', 'compileRun', cb);
});

gulp.task('test', function (cb) {
    runSequence('compileGulp', 'compileTest', cb);
});