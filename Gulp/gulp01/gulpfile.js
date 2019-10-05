var path = require('path')
var gulp = require('gulp')
var uglify = require('gulp-uglify');   ////用于压缩js文件
var minifyCSS = require('gulp-minify-css');   ////用于压缩css文件
var imagemin = require('gulp-imagemin');   ////用于压缩image文件
var babel = require('gulp-babel');  // 将es6代码转成es5
var htmlmin = require('gulp-htmlmin'); // 压缩html
var del = require('del')
var connect = require('gulp-connect') // 微型服务器
var autoprefixer = require('gulp-autoprefixer')

// var $ = require('')


/************ */
// 任务名1执行之前必须在任务名2执行之后
gulp.task('任务名1', ['任务名2', '任务名3'], function () {
  // 回调函数
  return gulp.src('文件路径')   // 把文件加载到内存当中去， 用return时当有多个任务同时执行时可以异步，不加return 就同步执行
    .pipe('各种函数操作')
    .pipe(gulp.dest('输入目录'))
})
/************ */


var resolve = function (dir) {
  return path.resolve(__dirname, dir)
}
/**源代码路径 */
var codeDir = resolve('./src')
var outputDir = resolve('./dist')
/////新建一个‘script’任务   /////用于压缩js文件
gulp.task('es6', function () {
  /////找到需要压缩的文件
  gulp.src(`${codeDir}/js/**/*.js`)   ////  /**/  表示js目录下的任意层级的目录
    //////把ES6代码转成ES5代码
    .pipe(babel())
    /////压缩文件
    // .pipe(uglify())
    /////另存压缩后文件
    // .pipe(gulp.dest(`${outputDir}/js`));
    .pipe(gulp.dest('dist'))
});

/////新建一个‘script’任务   /////用于压缩js文件
gulp.task('script', function () {
  /////找到需要压缩的文件
  //  return gulp.src(`${codeDir}/js/**/*.js`)   ////  /**/  表示js目录下的任意层级的目录
  return gulp.src(`${codeDir}/js/**/*.js`)   ////  /**/  表示js目录下的任意层级的目录
    //////把ES6代码转成ES5代码
    .pipe(babel())
    /////压缩文件
    .pipe(uglify())
    /////另存压缩后文件
    .pipe(gulp.dest(`${outputDir}/js`))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  return gulp.src(`${codeDir}/css/**/*.css`)
    .pipe(autoprefixer({
      　borwsers:["last 2 versions"],　　　　//针对游览器
        remove:true 　
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(`${outputDir}/css`))
    .pipe(connect.reload());
});

gulp.task('images', function () {
  return gulp.src(`${codeDir}/images/**/*.*`)
    // .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest(`${outputDir}/images`))
    .pipe(connect.reload())
});


gulp.task('html', function () {
  var options = {
    removeComments: true,  //清除HTML注释
    collapseWhitespace: true,  //压缩HTML
    collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input checked />
    removeEmptyAttributes: true,  //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,  //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
    minifyJS: true,  //压缩页面JS
    minifyCSS: true  //压缩页面CSS
  };
  return gulp.src(`${codeDir}/**/*.htm`)
    .pipe(htmlmin(options))
    .pipe(gulp.dest(`${outputDir}`))
    .pipe(connect.reload());
});

gulp.task('auto', function () {
  ////////监听文件，当文件被修改后自动执行压缩任务
  ////////第一个参数：监听的目标文件
  ///////第二个参数：监听到修改后执行的压缩任务
  gulp.watch(`${codeDir}/js/**/*.js`, ['script']);
  gulp.watch(`${codeDir}/css/**/*.css`, ['css']);
  gulp.watch(`${codeDir}/images/**/*.*`, ['images']);
});

gulp.task('clean', function () {
  return del([outputDir]);
})

/** 服务 */
gulp.task('server', ['default'], function () {
  connect.server({
    livereload: true,   // 实时刷新
    root: outputDir,  //
    port: 8111
  })
  ////////监听文件，当文件被修改后自动执行压缩任务
  ////////第一个参数：监听的目标文件
  ///////第二个参数：监听到修改后执行的压缩任务
  gulp.watch(`${codeDir}/js/**/*.js`, ['script']);
  gulp.watch(`${codeDir}/css/**/*.css`, ['css']);
  gulp.watch(`${codeDir}/images/**/*.*`, ['images']);
})

/////////定义默认任务,使用gulp 启动数组里的所有任务
// gulp.task('default',['script', 'html', 'css', 'images']);
gulp.task('default', ['clean'], function () {
  // 获取环境配置
  gulp.start(['script', 'html', 'css', 'images'], function () {

  })
});