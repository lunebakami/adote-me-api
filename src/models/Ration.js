const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Ration extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        ration_type: Sequelize.STRING,
        quantity: Sequelize.FLOAT,
        brand: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Ration;
