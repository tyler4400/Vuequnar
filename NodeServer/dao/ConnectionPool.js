var mysql = require('mysql');

/* 引入配置 */
var dbconfig = require('./DBConfig');

/* 创建连接池 */
var pool = mysql.createPool(dbconfig.mysql);

var daoUtil = function(sql, options, callback) {
			pool.getConnection(function(error, connection) {
				if(error){
					console.error('获取连接出错：' + error);
					throw error;
				}else{
					try{
						connection.query(sql, options, function(error, result, field) {
							if(error) throw error;
							callback(result, field);
						});
					}catch(error){
						console.log("数据库查询出错！");
						console.error(error.message);
						throw error;
					}finally{
						connection.release();
					}
					
				}	
			});
} 

module.exports = daoUtil;