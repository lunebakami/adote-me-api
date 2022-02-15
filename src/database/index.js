const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(
      databaseConfig.database,
      databaseConfig.username,
      databaseConfig.password,
      {
        host: databaseConfig.host,
        port: databaseConfig.port,
        dialect: databaseConfig.dialect,
      }
    );
  }

  async test() {
    await this.connection.authenticate();
  }
}

module.exports = new Database();
