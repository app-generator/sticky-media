/*
 * Simple GULP tooling
 * Copyright AppSeed (https://appseed.us)
 * License MIT
 */
var gulp = require("gulp");
var minifyCSS = require("gulp-clean-css");
var minify = require("gulp-minify");
var open = require("gulp-open");

gulp.task("minify-css", function () {
  return gulp
    .src("./src/css/*.css")
    .pipe(minifyCSS())
    .pipe(gulp.dest("./dist/css/"));
});

gulp.task("minify-js", function () {
  return gulp.src("./src/*.js").pipe(minify()).pipe(gulp.dest("./dist"));
});

gulp.task("watch", function () {
  gulp.watch("./src/css/*.css", gulp.series("minify-css"));
  gulp.watch("./src/index.js", gulp.series("minify-js"));
});

gulp.task("open", function () {
  gulp.src("./src/html/sticky-popup.html").pipe(open());
});

gulp.task("default", gulp.parallel("open", "watch"));
