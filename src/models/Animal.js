import Sequelize, { Model } from 'sequelize';

class Animal extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        breed: Sequelize.STRING,
        birth: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Animal;
