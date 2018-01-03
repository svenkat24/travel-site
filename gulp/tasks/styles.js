var gulp = require('gulp')
,autoprefixer = require('autoprefixer')
,postcss = require('gulp-postcss')
,cssvars = require('postcss-simple-vars')
,cssnested = require('postcss-nested')
,cssimport = require('postcss-import')
,mixins = require('postcss-mixins')

;

gulp.task('styles',function(){
  console.log('css post processing started');
  return gulp.src('./app/assets/css/styles.css')
  .pipe(postcss([cssimport,mixins,cssvars,cssnested,autoprefixer]))
  .on('error',function(errorInfo){
    console.log('error info: ' + errorInfo.toString);
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
  console.log('css post processing completed');
});
