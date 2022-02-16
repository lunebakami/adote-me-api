const Sequelize = require('sequelize');
const { Model } = Sequelize;

class RationDonation extends Model {
  static init(sequelize) {
    super.init(
      {
        validity: Sequelize.STRING,
        quantity: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Ration, { foreignKey: 'ration_id', as: 'ration' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = RationDonation;
