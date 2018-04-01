'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify');

gulp.task('js:build', function () {
    gulp.src('src/js/main.js') //Найдем наш main файл
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest('build/js/')) //Выплюнем готовый файл в build
});

gulp.task('style:build', function () {
    gulp.src('src/scss/styles.scss') //Выберем наш main.scss
        .pipe(sass()) //Скомпилируем
        .pipe(gulp.dest('build/css/')) //И в build
});

gulp.task('build', [
    'js:build',
    'style:build'
]);

gulp.task('watch', function(){
    watch(['src/scss/styles.scss'], function(event, cb) {
        gulp.start('style:build');
    });
    watch(['src/js/main.js'], function(event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('default', ['build', 'watch']);