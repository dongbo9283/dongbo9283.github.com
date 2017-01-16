var gulp = require('gulp');
//压缩
var uglify = require('gulp-uglify');
//文件合并
var concat = require('gulp-concat');
//编写任务
gulp.task('yasuo:hebing',function(){
    gulp.src('js/**/*.js')  //源头
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build/'));
});

    gulp.task('default',['yasuo:hebing']);
    
    
    
    
    