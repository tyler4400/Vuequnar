var service = require('../dao/service.js');

module.exports = {
	test:function (request, response) {
		console.log("test");
		// response.send("哈哈哈哈test");
		// response.type('application/json');
		response.jsonp({"hello":"test"});
	}

	,test2: function(request, response) {
		console.log("test2");
		service('select name from websites where id = ?', [2], function(error, result, field) {
			if(error) throw error;
			var params = {
				'name' : result[0].name
			}
			response.json(params);
		})
	}

	,test3: function(request, response){
		console.log("\n-_____________________________test3________________________________-\n");
		var id = request.query.id || 2;
		service.test3(id, function (data) {
			var aaa = data[0];
			console.log(aaa);
			response.send(aaa);
		});
	}

	,findBO: function (request, response) {
		service.findBO([request.body.Start,request.body.RowNumber],function (result){
			response.json(result);
		});
		// service('select * from book_order limit ?,?',[request.body.Start,request.body.RowNumber],function (error, result, field){
		// 	if(error) throw error;
		// 	// console.log(result);
		// 	response.json(result);
			
		// });
	}

	,findBOAll: function (request, response) {
		service.findBOAll([],function (result) {
			console.log(result);
			response.json(result[0]);
		});
	}

	,deleteBO: function (request, response) {
		request.body.Picked.forEach(function (value) {
			service.deleteBO([value], function (result){
				console.log(result);
			});
		});
		response.send({status:'ok'});
	}

	,queryBOById: function (request, response) {
		console.log(request.body);
		service.queryBOById([request.body.bid],function (result){
			response.json(result);
		});
	}

	,update: function(request, response) {
		service.update([request.body.bname,request.body.bauthor,request.body.bprice,request.body.btype,
			request.body.bno,request.body.bdate,request.body.bid],function (result) {
				console.log(result);
			});
		response.send({status:'ok'});
	}

	,insert: function(request, response) {
		service.insert([request.body.bname,request.body.bauthor,request.body.bprice,request.body.btype,
			request.body.bno,request.body.bdate],function (result) {
				console.log(result);
			});
		response.send({status:'ok'});
	}

	,UserLogin4: function (request, response) {
		//TODO 查询数据库校验用户信息，（这里略过，只是打印一下前端传来的数据）
		console.log(request.body);
		//返回用户id，
		response.cookie("User", request.body.Username, { maxAge: 1000 * 30});
		response.send({ "UserId":"长者"});
	}

	,UserInfo2: function (request, response) {
		//TODO ，（这里略过，只是打印一下前端传来的数据）
		console.log(request.body);
		//返回用户id，
		response.send({
		  "Company":"北京科蓝软件系统股份有限公司"
		  ,"Name":"李明"
		  ,"LoginTH":"1"
		});
	}

	,InnerTrs: function (request, response) {
		//TODO ，（这里略过，只是打印一下前端传来的数据）
		console.log(request.body);
		//返回用户id，
		response.send({
		  "OutAcc": [
		    {
		      "No": "8888 8888 8888 8888"
		      ,"Alia":"攒着买吃鸡的"
		      ,"Balance":"122 000.00"
		      ,"RealBalance":"1 560.00"
		    }
		    ,
		    {
		      "No": "7777 7777 7777 7777"
		     ,"Alia":"买电脑的"
		      ,"Balance":"99 000.00"
		      ,"RealBalance":"9 300.00"
		    }
		    ,
		    {
		      "No": "6666 6666 6666 6666"
		     ,"Alia":"回家上交给党的"
		      ,"Balance":"1 000.00"
		      ,"RealBalance":"10.00"
		    }
		  ]
		  ,
		  "Intend": [
		    {
		      "Tend": "买电脑"
		    }
		    ,
		    {
		      "Tend": "送主播"
		    }
		    ,
		    {
		      "Tend": "买核弹"
		    }
		    ,
		    {
		      "Tend": "攒私房钱"
		    }]
		});
	}

	,logout: function (request, response) {
		request.session.isLogined = false;
		response.send({status:'ok'});
		console.log(request.session);
	}
	
	,header1: function (request, response) {
		let json = [
					  {
					    "FirstMenu":"我的首页"
					    ,"SecondMenu":[
					      {
					        "MenuName":"行内转账"
					        ,"MenuIcon":"../../images/icon/icon5.png"
					      }
					      ,{
					        "MenuName":"我的信息"
					      ,"MenuIcon":"../../images/icon/icon3.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon7.png"
					      }
					      ]
					  }
					  ,
					  {
					    "FirstMenu":"账户管理"
					    ,"SecondMenu":[
					      {
					        "MenuName":"行内转账"
					        ,"MenuIcon":"../../images/icon/icon12.png"
					      }
					      ,{
					        "MenuName":"我的信息"
					      ,"MenuIcon":"../../images/icon/icon9.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon10.png"
					      }
					      ]
					  }
					  ,
					  {
					    "FirstMenu":"转账汇款"
					    ,"SecondMenu":[
					      {
					        "MenuName":"行内转账"
					        ,"MenuIcon":"../../images/icon/icon14.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon20.png"
					      }
					      ]
					  }
					  ,
					  {
					    "FirstMenu":"财务管理"
					    ,"SecondMenu":[
					      {
					        "MenuName":"行内转账"
					        ,"MenuIcon":"../../images/icon/icon5.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon16.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon21.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon11.png"
					      }
					      ]
					  }
					  ,
					  {
					    "FirstMenu":"交易授权"
					    ,"SecondMenu":[
					      {
					        "MenuName":"行内转账"
					        ,"MenuIcon":"../../images/icon/icon9.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon8.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon11.png"
					      }
					      ]
					  }
					  ,
					  {
					    "FirstMenu":"企业中心"
					    ,"SecondMenu":[
					      {
					        "MenuName":"行内转账"
					        ,"MenuIcon":"../../images/icon/icon3.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon14.png"
					      }
					      ,{
					        "MenuName":"交易明细"
					      ,"MenuIcon":"../../images/icon/icon15.png"
					      }
					      ]
					  }];
		response.json(json);
	}
}