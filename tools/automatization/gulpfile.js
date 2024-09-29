const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task('build', function (callback) {
    console.log("building the site");
    setTimeout(callback, 1300);
});

gulp.task('serve', function (callback) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }));
    callback();
});

gulp.task('default', gulp.series('build', 'serve'));