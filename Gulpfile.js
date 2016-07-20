var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    sass          = require('gulp-sass'),
    prefix        = require('gulp-autoprefixer'),
    autowatch     = require('gulp-autowatch'),
    plumber       = require('gulp-plumber'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    csso          = require('gulp-csso'),
    imagemin      = require('gulp-imagemin');

// HTML

gulp.task('htmls', function () {
    gulp.src(['*.html'])
        .pipe(connect.reload());
});

// SCSS

gulp.task('styles', function() {
    return gulp.src(['css/scss/main.scss'] )
        .pipe(plumber())
        .pipe(sass())
        //.pipe(prefix([{  browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox 14', 'Opera 11.1']  }]))
        .pipe(csso())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

// JS
gulp.task('js', function() {
    gulp.src([
        'partials/js/jquery-2.0.0.min.js',
        'partials/js/bootstrap.min.js',
        'partials/js/mobile-detect.min.js',
        'partials/js/jquery.easing.min.js',
        'partials/js/lightgallery.js',
        'partials/js/jquery.mousewheel.min.js',
        'partials/lg-thumbnail.js',
        'partials/js/lg-fullscreen.js',
        'partials/js/jquery.fade-this.js',
        'partials/js/pushy.min.js',
        'partials/js/main.js'
    ]) // файлы, которые обрабатываем
        .pipe(concat('main.min.js')) // склеиваем все JS
        .pipe(uglify()) // получившуюся "портянку" минифицируем
        .pipe(gulp.dest('js/')); // результат пишем по указанному адресу
});

// IMAGE

gulp.task('images', function() {
    gulp.src('img/**/*') // берем любые файлы в папке и ее подпапках
        .pipe(imagemin()) // оптимизируем изображения для веба
        .pipe(gulp.dest('img/')); // результат пишем по указанному адресу
});

// WATCH

var paths = {
    htmls:          ['*.html'],
    styles:         'css/scss/**/*.scss'
};

gulp.task('watch', function(cb) {
    autowatch(gulp, paths);
    return cb();
});

// LIVERELOAD 

gulp.task('connect', function() {
    connect.server({
        port: '8000',
        livereload: true
    });
});

// DEFAULT

gulp.task('default',  [
    'connect',
    'styles',
    'watch'
]);