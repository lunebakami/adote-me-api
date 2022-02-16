const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');

const User = require('../models/User');
const Animal = require('../models/Animal');
const Adoption = require('../models/Adoption');

const models = [User, Animal, Adoption];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  async test() {
    await this.connection.authenticate();
  }
}

module.exports = new Database();
