const { src, dest } = require('gulp')
const htmlmin = require('gulp-html-minifier-terser')

module.exports = function htmlMin() {
    return src('dist/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            useShortDoctype: true,
            processScripts: ['application/ld+json']
        }))
        .pipe(dest('dist'))
}
