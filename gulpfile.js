'use strict';

const gulp        = require('gulp'),
      browserSync = require("browser-sync").create(),
      reload      = browserSync.reload;

const path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
  },
  src: {
    html: 'src/*.html',
    js: 'src/js/main.js',
    style: 'src/sass/main.scss',
    img: 'src/img/**/*.*',
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/sass/**/*.scss',
    img: 'src/img/**/*.*',
  },
  clean: './build'
};

const config = {
  server: {
    baseDir: "./build"
  },
  tunnel: false,
  host: 'localhost',
  port: 5000,
  logPrefix: "LOCAL.SERVER"
};

gulp.task('webserver', () => {
  browserSync.init(config);
});

gulp.task('clean', (cb) => {
  const rimraf = require('rimraf');

  rimraf(path.clean, cb);
});

gulp.task('build:html', () => {
  gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
});

gulp.task('build:js', () => {
  const uglify     = require('gulp-uglify'),
        sourcemaps = require('gulp-sourcemaps');

  gulp.src(path.src.js)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
});

gulp.task('build:style', () => {
  const sass         = require('gulp-sass'),
        sourcemaps   = require('gulp-sourcemaps'),
        postcss      = require('gulp-postcss'),
        normalize    = require('postcss-normalize'),
        autoprefixer = require('autoprefixer'),
        cssnano      = require('cssnano'),

        plugins = [
          normalize(),
          autoprefixer(),
          cssnano()
        ];

  gulp.src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
});

gulp.task('build:image', () => {
  const imagemin = require('gulp-imagemin'),
        pngquant = require('imagemin-pngquant');

  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.stream());
});

gulp.task('build', [
  'build:html',
  'build:js',
  'build:style',
  'build:image'
]);

gulp.task('watch', () => {
  const watch = require('gulp-watch');

  watch([path.watch.html], (event, cb) => {
    gulp.start('build:html');
  });
  watch([path.watch.style], (event, cb) => {
    gulp.start('build:style');
  });
  watch([path.watch.js], (event, cb) => {
    gulp.start('build:js');
  });
  watch([path.watch.img], (event, cb) => {
    gulp.start('build:image');
  });
});

gulp.task('default', ['build', 'webserver', 'watch']);