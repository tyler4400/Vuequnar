var daoUtil = require("./ConnectionPool");

module.exports = {
	/* 测试 */
	//根据id查询name，如果没有传递参数。则查询所有name值(未完成).
	test3: function(params,callback){
		var sql = "select name from websites where id = ?";
		daoUtil(sql, params, callback);
	}

	,findBO: function(params,callback){
		var sql = "select * from book_order limit ?,?";
		daoUtil(sql, params, callback);
	}

	,findBOAll: function(params,callback){
		var sql = "select count(*) as rows from book_order";
		daoUtil(sql, params, callback);
	}

	,deleteBO: function(params,callback){
		var sql = "delete from book_order where bid = ?";
		daoUtil(sql, params, callback);
	}

	,queryBOById: function(params,callback){
		var sql = "select * from book_order where bid = ?";
		daoUtil(sql, params, callback);
	}

	,update: function(params,callback){
		var sql = "update book_order set bname = ?, bauthor = ?, bprice = ?, btype = ?, bno = ?, bdate = ? where bid = ?";
		daoUtil(sql, params, callback);
	}

	,insert: function(params,callback){
		var sql = "INSERT INTO book_order(bname,bauthor,bprice,btype,bno,bdate) VALUES(?,?,?,?,?,?)";
		daoUtil(sql, params, callback);
	}
}