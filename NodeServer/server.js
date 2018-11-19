/**
 * Created by Tyler on 2017/10/18 10:40.
 */

/* 加载主模块 */
var express = require('express');
var app = express();

/* 加载body-parser 来处理json */
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/json'}));// parse application/json ：接受 json 或者可以转换为json的数据格式

/* 加载cookie-parser和session */
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser());
app.use(session({
////这里的name值得是cookie的name，默认cookie的name是：connect.sid
  //name: 'hhw',
  secret: 'keyboard cat',
  cookie: ('name', 'value', { /*path: '/', httpOnly: true,secure: false, maxAge:  60000*/ }),
  //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
  resave: true,
  //强制“未初始化”的会话保存到存储。
  saveUninitialized: true,

}));

/* 加载路由模块 */
var router = require('./Router/index.js');
app.use('/', router);

//app.use(express.static('public'));


var server = app.listen(8070,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Time:" + new Date());
    console.log("启动成功，访问 http://%s:%s", host, port)
});
