var mysql = require('mysql');

function connectMySql() {
	if (!process.env.NODE_ENV) {
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'casadocodigo_nodejs'
		});
	}

	if (process.env.NODE_ENV == 'test') {
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'casadocodigo_nodejs_test'
		});
	}
}

module.exports = function() {
	return connectMySql;
}
