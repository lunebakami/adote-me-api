const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Adoption extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Animal, { foreignKey: 'animal_id', as: 'animal' });
  }
}

module.exports = Adoption;
