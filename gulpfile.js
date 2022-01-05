const gulp = require('gulp')
const gulpUglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')

// Task for 'min'
gulp.task('js-min-file', async function () {
  gulp
    .src('src/js/*.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(gulpUglify())
    .pipe(
      rename(function (path) {
        const sourcePath = path
        sourcePath.basename += '.min'
        sourcePath.extname = '.js'
      }),
    )
    .pipe(gulp.dest('dist'))
})

// Task for 'normal'
gulp.task('js-normal-file', async function () {
  gulp
    .src('src/js/*.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(
      rename(function (path) {
        const sourcePath = path
        sourcePath.extname = '.js'
      }),
    )
    .pipe(gulp.dest('dist'))
})

gulp.task(
  'default',
  gulp.series('js-normal-file', 'js-min-file', async function () {
    console.log('gulp task finish!')
  }),
)
