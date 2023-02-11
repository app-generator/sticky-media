/*
 * Simple GULP tooling
 * Copyright AppSeed (https://appseed.us)
 * License MIT
 */
const { series } = require("gulp");
const gulp = require("gulp");
const minify = require("gulp-minify");

function build(cb) {
  gulp.src(["src/*.js"]).pipe(minify()).pipe(gulp.dest("dist"));
  cb();
}

exports.build = build;
exports.default = series(build);
