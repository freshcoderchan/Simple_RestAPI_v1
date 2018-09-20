const config = {
  dialect: 'postgres',
  host: 'localhost',
  database: 'test',
  username: 'postgres',
  password: 'coolcoder01',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = config;