var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function(cb) {
  gulp
    .src('style/less/*.less')
    .pipe(less())
    .pipe(
      gulp.dest('style/css')
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('less', function(cb) {
    gulp.watch('style/less/*.less', gulp.series('less'));
    cb();
  })
);