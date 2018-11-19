module.exports = {
	mysql:{
		/* 数据连接配置 */
		host : 'localhost',
		user : 'root',
		password : 'root',
		port : 3306,
		database : 'helloworld',

		/* 连接池配置 */
		connectionLimit : 20,
		queueLimit : 0,
		waitForConnections : true,
		acquireTimeout : 10000
	}
};