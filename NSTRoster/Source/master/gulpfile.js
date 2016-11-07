var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

var path = {
	CSS_INPUT : "source/styles/*.less",
	CSS_OUTPUT : "static/css"
}

gulp.task('less', function() {
    return gulp.src(path.CSS_INPUT)
    	.pipe(concat("master.less"))
        .pipe(less())
        .pipe(gulp.dest(path.CSS_OUTPUT));
});


gulp.task('default',["less"], function () {
    
});