const gulp = require("gulp")
const sass = require("gulp-sass")
const connect = require("gulp-connect")
var rename = require("gulp-rename")

gulp.task("sass", function() {
    return gulp
        .src(["./src/scss/*.scss"])
        .pipe(
            sass({
                includePaths: ["./src/scss"],
                outputStyle: "expanded"
            })
        )
        .pipe(gulp.dest("./srv/css"))
})

gulp.task("js", function() {
    gulp.src(["./src/js/*.js"]).pipe(gulp.dest("./srv/js/"))
    return gulp
        .src("./node_modules/es6-scroll-to/lib/index.js")
        .pipe(rename("es6-scroll-to.js"))
        .pipe(gulp.dest("./srv/js/"))
})

gulp.task("html", function() {
    return gulp.src("./src/*.html").pipe(gulp.dest("./srv/"))
})

gulp.task("connect:open", function(done) {
    const opn = require("opn")
    opn("http://localhost:1337")
    done()
})

gulp.task("connect", function(done) {
    connect.server({
        root: "srv",
        port: 1337,
        livereload: true
    })
    done()
})

gulp.task("livereload", function() {
    gulp.src("./srv/**/*").pipe(connect.reload())
})

gulp.task("watch", function() {
    gulp.watch("./src/*.html", gulp.parallel("html"))
    gulp.watch("./src/js/*.js", gulp.parallel("js"))
    gulp.watch("./src/scss/*.scss", gulp.parallel("sass"))
    gulp.watch("./src/**/*", gulp.parallel("livereload"))
})

gulp.task(
    "default",
    gulp.parallel("connect", "connect:open", "watch", "sass", "js", "html")
)
