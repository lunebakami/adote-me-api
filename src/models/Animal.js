import Sequelize, { Model } from 'sequelize';

class User extends Model {
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

module.exports = User;
