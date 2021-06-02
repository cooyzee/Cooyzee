const { src, dest, watch } = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

// compile sass to css
// outputStyle: nested expanded compact compressed
function style() {
  return src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('./dist'));
}

// sass watch on /css
function watchStyle() {
  watch('./src/**/*.scss', { ignoreInitial: false }, style);
}

exports.style = watchStyle
exports.build = style