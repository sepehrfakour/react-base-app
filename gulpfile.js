const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const replace = require('gulp-replace');

const webpackDevServerUrl = 'http://localhost:8080';

// Static Server
gulp.task('serve', function() {
    browserSync.init({
        server: "."
    });
});

// Prepare app.js bundle path for production
gulp.task('production-js', function(){
    var filenames = [
        './index.html'
    ];
    filenames.forEach( function (name) {
        gulp.src([name], {base: './'})
            .pipe(replace( webpackDevServerUrl + '/app.js', '/client/js/app.js'))
            .pipe(gulp.dest('./'));
    });
});
// Prepare app.js bundle path for development
gulp.task('dev-js', function(){
    var filenames = [
        './index.html'
    ];
    filenames.forEach( function (name) {
        gulp.src([name], {base: './'})
            .pipe(replace('/client/js/app.js', webpackDevServerUrl + '/app.js'))
            .pipe(gulp.dest('./'));
    });
});


gulp.task('default', ['serve']);
gulp.task('server', ['serve']);
gulp.task('dev', ['dev-js','serve'], function () {
    console.log('Asset paths ready for development');
});
gulp.task('production', ['production-js'], function () {
    console.log('Asset paths ready for production');
});
