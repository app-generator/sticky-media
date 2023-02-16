/*
 * Simple GULP tooling
 * Copyright AppSeed (https://appseed.us)
 * License MIT
 */
var gulp = require("gulp");
var minify = require("gulp-minify");
var open = require("gulp-open");

gulp.task("prod", function () {
  return gulp.src("./src/*.js").pipe(minify()).pipe(gulp.dest("./dist"));
});

gulp.task("watch", function () {
  gulp.watch("./src/index.js", gulp.series("prod"));
});

gulp.task("open", function () {
  gulp.src("./index.html").pipe(open());
});

gulp.task("default", gulp.parallel("open", "watch"));
