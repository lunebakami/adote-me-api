const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');

const User = require('../models/User');
const Animal = require('../models/Animal');

const models = [User, Animal];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }

  async test() {
    await this.connection.authenticate();
  }
}

module.exports = new Database();
