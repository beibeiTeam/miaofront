var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src(['src/less/*.less'])
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});
 
gulp.task('lesswatch', function () {
    gulp.watch('src/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});