var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jshintStylish = require("jshint-stylish");

gulp.task("lint", function(){
  return gulp.src("app/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});




