# 关于
2017年10月20日 20:49:50
author：tyler
Email：tyler4400@foxmail.com
### 1.项目说明
本项目为前后端综合学习项目，前端采用vx框架，后端为node+epxress框架搭建服务器。
### 2.安装运行
1. 导入数据表. 已经附带了。 注意数据库表名称。
2. 在后端根目录使用命令
~~~
    $ npm install
~~~
这里的package.json是手写的。如果有问题请手动安装以下模块 body-parser, express, mysql, cookie-parser

3. 开启后端服务.端口号为3000，可在server.js里面修改，但务必和前段保持一致。
~~~
   $ node server.js
~~~

4. 打开nginx.exe. nginx监听端口为8079，向后端转发端口为3000.

5. 打开浏览器访问127.0.0.1;8079。这时候应该蹦出登录页来。本项目的前端由一个发送模拟json的前端项目改成。如果你看见页面蹦出一串英文并显示jsonerror，是因为后端并没有处理该请求，后端没有完全写完。完成的最主要的一个交易为http://localhost:8079/index.html#/app/ShowDetail. (或者登录之后点击侧边栏的‘跨行转账’)
是一个表格的增删查改，是本项目前端后端联动的示例。

# 
2017年10月25日 16:31:28 
#
### 补充
这个是版本2,优化了代码增加了cookie和session