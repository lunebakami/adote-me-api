const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
  }

  async test() {
    await this.connection.authenticate();
  }
}

module.exports = new Database();
