var gulp =require("gulp");
var less = require("gulp-less");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

//定义常量
const transformJs = "transformJs";
const transformSass = "transformSass";
const transformLess = "transformLess";
const transforglifyJs = "transforglifyJs";
const sourceJs = "sourceJs";
const bowerJs = "bowerJs";
const test = 'test';

gulp.task(transformLess, function () {
    return gulp.src("src/css/*.less")
        .pipe(less())
        .pipe(gulp.dest("./dist"))
});

//js
gulp.task(transforglifyJs, function () {
    return gulp.src("src/script/*.js")
        // .pipe(react())
        .pipe(babel(
            {
                presets: ["babel-preset-es2015"]
            }
        ))
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/script/"))
});

gulp.task(transformJs, function () {
    return gulp.src("src/script/*.js")
        // .pipe(react())
        .pipe(babel(
            {
                presets: ["babel-preset-es2015"]
            }
        ))
        .pipe(concat('bundle.js'))
        // .pipe(uglify())
        .pipe(gulp.dest("./dist/script/"))
});

gulp.task(bowerJs, function () {
	return gulp.src([
		"bower_components/jquery/dist/jquery.min.js",
		"bower_components/angular/angular.min.js",
		])
		.pipe(concat('source.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest("./dist/script/"))
})

gulp.task("default",['transformLess','bowerJs','transformJs','transforglifyJs']);
