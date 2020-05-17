var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

function browserSync () {
    browserSync.init({
        server: {
            baseDir: 'docs'
        },
    })
}

 function style () {
    return gulp.src('src/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('docs/'))
        .pipe(browserSync.stream())
}
 function html () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('docs/'))
        .pipe(browserSync.stream())
}
 function js () {
    return gulp.src('src/js/script.js')
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.stream())
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./docs"
        }
    });
    gulp.watch('src/**/*.scss', style);
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/**/*.js', js);
} 

	
exports.html = html;
exports.js = js;
exports.style = style;
exports.watch = watch
