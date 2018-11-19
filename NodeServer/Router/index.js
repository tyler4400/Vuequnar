var express = require('express');

var router = express.Router();

//引入控制器模块
var controller = require('../web/servlet.js');

//没有挂载路径，通过该路由的每个请求都会执行该中间件
//该路由记录并打印了log日志
router.use(function timeLog(request, response, next) {
	console.log("________________________________________________________");
	console.log('请求时间:' + new Date());
	console.log('请求方式：');
	console.log(request.method);
	console.log('安装URL路径：');
	console.log(request.baseUrl);
	console.log('请求主体：');
	console.log(request.body);
	console.log('主机');
	console.log(request.hostname);
	console.log('原始请求地址：');
	console.log(request.originalUrl);
	console.log('请求路径：');
	console.log(request.path);
	console.log('查询参数');
	console.log(request.query);
	console.log('匹配的路由：');
	console.log(request.route);
	console.log('路由参数：');
	console.log(request.params);
	console.log('cookies:')
	console.log(request.cookies);


	response.set({'dd':'cc'});	//修改响应头
	response.type('application/json');
	next();
});

//对特定url进行过滤
router.use('/remote/', function (request, response, next) {
	console.log(request.session);
	if(!request.session.isLogined){
		//拦截 或重定向
		request.session.isLogined = true;
		console.log("没有登录，登录成功");
		next();
	}else{
		//放行
		console.log("已经登录，放行");
		console.log("________________________________________________________");
		next();
	}
});

/**************************** 上面的路由是过滤，下面是处理******************************************/
//主页
router.all('/',function (request, response) {
	response.send("hello world!");
	//retrun response.jsonp({"hello":"world"});
});

//about
router.all('/about',function (request, response) {
	response.send("this is the about page. \ndeveloped by tyler on 2017-10-18 11:39:12");
	//retrun response.jsonp({"hello":"world"});
});

//test
router.get('/test', controller.test);

//test2
router.get('/test2', controller.test2);

//test3
router.get('/test3', controller.test3);

//获取书籍订单记录
router.post('/remote/findBO.do', controller.findBO);

//获取头部标题栏布局数据
router.post('/remote/header1.do', controller.header1);

//获取总数据条数
router.post('/remote/findBOAll.do', controller.findBOAll);

//删除数据
router.post('/remote/deleteBO.do', controller.deleteBO);

//查询某一行数据
router.post('/remote/queryBOById.do', controller.queryBOById);

//更新一行数据
router.post('/remote/update.do', controller.update);

//新增一行数据
router.post('/remote/insert.do', controller.insert);

//登录
router.post('/remote/UserLogin4.do', controller.UserLogin4);

//查询用户信息
router.post('/remote/UserInfo2.do', controller.UserInfo2);

//查询交易信息
router.post('/remote/InnerTrs.do', controller.InnerTrs);

//登出
router.post('/remote/logout.do', controller.logout);


////test
router.get('/api/city.json', controller.Qcity);

// //test2
router.get('/api/detail.json', controller.Qdetail);

// //test3
router.get('/api/index.json', controller.Qindex);
module.exports = router;

