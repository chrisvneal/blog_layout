const gulp = require('gulp');
const sass = require('gulp-sass');
const sass_folder = 'src/scss/**/*.scss';
const css_folder = 'dist/css';
const html_folder = 'src/**/*.html';
const browserSync = require('browser-sync').create();

// browserSync function
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
});

// convert sass to css
gulp.task('sass', function() {
  return gulp.src(sass_folder)
    .pipe(sass())
    .pipe(gulp.dest(css_folder))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function() {
  return gulp.src(html_folder)
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}));
});



// watch functions
gulp.task('watch', gulp.parallel('html', 'sass', 'browserSync'), function() {
  gulp.watch(sass_folder, gulp.series('sass'));
  gulp.watch(html_folder, gulp.series('html'));
});

gulp.task('default', gulp.series('watch'));