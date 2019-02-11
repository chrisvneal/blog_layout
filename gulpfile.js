let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src(('src/scss/**/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});