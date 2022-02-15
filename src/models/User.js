const Sequelize = require('sequelize');
const { Model } = Sequelize;

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        cpf: Sequelize.STRING,
        phone: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = User;
