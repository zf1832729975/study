# nodejs+gulpjs压缩js代码
原文地址<https://www.cnblogs.com/hxphp/p/7210150.html>

1.安装node.js

　　下载地址：nodejs.org  或者  nodejs.cn

2.安装gulp之前我们需要安装nodejs的环境，检测能够正常使用npm后，我们用npm对gulp进行一次全局安装

　　　npm install gulp -g

3.安装好了以后我们建立一个test作为项目主路径，然后在cmd里cd到这个路径用npm对gulp进行依赖安装

　　npm install gulp --save-dev

　安装完成后test目录如下：

　　![img](https://images2015.cnblogs.com/blog/969334/201707/969334-20170720105855052-1890491223.png)

4.**插件安装-安装gulp需要用到的插件**

　　要使用gulp就必须使用gulp的插件，以下是我在网上搜索到的gulp插件：

　　sass的编译（gulp-ruby-sass）

　　自动添加css前缀（gulp-autoprefixer）

　　压缩css（gulp-minify-css）

　　js代码校验（gulp-jshint）

　　合并js文件（gulp-concat）

　　压缩js代码（gulp-uglify）

　　压缩图片（gulp-imagemin）

　　自动刷新页面（gulp-livereload）

　　图片缓存，只有图片替换了才压缩（gulp-cache）

　　更改提醒（gulp-notify）

　　清除文件（del）

需要哪个装哪个就行。

　　依然使用npm安装(在test文件夹下启动git或者cmd)：

```
　　　　npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache gulp-less del --save-dev
```

5.建立一个存放待压缩js的文件夹及一个放置压缩后js的文件夹(我建立的in,out)

　　![img](https://images2015.cnblogs.com/blog/969334/201707/969334-20170720110511974-1946162417.png)

6.gulpfile.js内容如下，可自己调整　　

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
/*引入gulp及相关插件 require('node_modules里对应模块')*/
var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var uglify = require('gulp-uglify');
//var concat = require('gulp-concat');
//css压缩
gulp.task('css', function () {
    gulp.src('src/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('des/css/'));
});
//js压缩
gulp.task('js', function () {
    gulp.src(['in/*.js'])
        .pipe(uglify({
            // 混淆变量名
            mangle: true,
            // 输出时将所有的中文转换为unicode
            output: {ascii_only: true}
            // 将所有压缩后的代码置于des/js/文件夹
        }))
        .pipe(gulp.dest('out/'));
});
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

7.在待压缩的js文件夹，打开命令行输入：

　　gulp js

　即可压缩所有js

 

完毕，留待日后查看或修正添加