// 'use strict';

// Gotta have Gulp
import gulp from 'gulp';

// gulp.task('log', () => {
//   console.log('hello');
// });

import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer'
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';

import evilicons from 'gulp-evil-icons';
import plumber from 'gulp-plumber';
import todo from 'gulp-todo';
import changed from 'gulp-changed';

// For images
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

// JS
import uglify from 'gulp-uglify';
import pump from 'pump';
import concat from 'gulp-concat';
import rename from 'gulp-rename';


// Data content to use with Jade
import data from './src/pug/data/data';

// Used to clear out /dist folder when we run gulp
import del from 'del';

//Send to github pages
import ghPages from 'gulp-gh-pages';


// Set default browser
const defaultBrowser = 'google chrome canary';

// Set path variables
const stylusPath = 'src/css/**/*.styl';
const pugPath = 'src/pug/htdocs/*.pug';
const watchJadePath = 'src/pug/**/*.pug';
const distPath = './dist';
const imgPath = 'src/img/**/*';
const watchJsPath = 'src/js/**/*.js';

// Autoprefixer options
const autoprefixerOptions = {
  browsers: ['ie >= 8', 'ie_mob >= 10', 'ff >= 3.6', 'chrome >= 10', 'safari >= 5.1', 'opera >= 11', 'ios >= 7', 'android >= 4.1', 'bb >= 10']
};

// BrowserSync Settings and task
browserSync.create();

// Static Server + watching styl/html files
gulp.task('serve', ['stylus', 'pug', 'imgs', 'moveModernizer', 'moveDocs'], function() {
  browserSync.init({
    server: distPath,
    browser: defaultBrowser
  });

  gulp.watch(stylusPath, ['stylus']);
  gulp.watch(watchJadePath, ['pug']);
  gulp.watch(watchJsPath, ['js']);
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
});

gulp.task('js', function() {
    return gulp.src([
      'src/js/vendor/countUp/dist/countUp.min.js',
      'src/js/vendor/waypoints/lib/noframework.waypoints.min.js',
      'src/js/vendor/waypoints/lib/shortcuts/inview.min.js',
      'src/js/vendor/smoothScroll.js',
      'src/js/script.js',
    ])
      .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
      }}))
      .pipe(concat('script.js'))
      .pipe(gulp.dest(distPath))
      .pipe(rename('script.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(distPath));
});


// Compile stylus into CSS & auto-inject into browsers
gulp.task('stylus', function() {
  return gulp.src('src/css/style.styl')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
  	.pipe(sourcemaps.init())
    .pipe(stylus({compress: true}))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(distPath))
    .pipe(browserSync.stream());
});

// Compile stylus into CSS & auto-inject into browsers
gulp.task('stylusProd', function() {
  return gulp.src('src/css/style.styl')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(stylus({compress: true}))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(distPath))
    .pipe(browserSync.stream());
});

gulp.task('pug', function() {
  gulp.src(pugPath)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(pug({
      locals: data,
      pretty: false
    }))
    .pipe(evilicons())
    .pipe(gulp.dest(distPath))
});


gulp.task('imgs', function () {
  return gulp.src(imgPath)
    .pipe(changed('dist/img'))
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest(`${distPath}/img`))
});


gulp.task('moveCNAME', function() {
  return gulp.src('CNAME')
    .pipe(gulp.dest('./dist'));
});

gulp.task('moveModernizer', function() {
  return gulp.src('src/js/vendor/modernizr.js')
    .pipe(gulp.dest('./dist'));
});

gulp.task('moveDocs', function() {
  return gulp.src('src/docs/*')
    .pipe(gulp.dest('./dist/docs'));
});

gulp.task('moveSitemap', function() {
  return gulp.src('src/sitemap.xml')
    .pipe(gulp.dest('./dist/'));
});


// Clearing task
gulp.task('clean', function () {
  return del([
    //'dist/**/*',
    'dist/*.html',
    'dist/*.css',
    'dist/*.js'
    // we don't want to clean this file though so we negate the pattern
    //'!dist/img'
  ]);
});

// Default task to run
gulp.task('default', ['clean', 'serve']);

gulp.task('log', () => {
  console.dir(data);
});

gulp.task('deploy', ['stylusProd', 'moveCNAME'],  function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: 'master'
    }));
});

// Todo task
gulp.task('todo', () => {
 gulp.src([stylusPath, pugPath])
   .pipe(todo({
     customTags: ['NOTES']
   }))
   .pipe(gulp.dest('./'))
   // -> Will output a TODO.md with your todos
})
