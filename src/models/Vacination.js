const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Vacination extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        dosage: Sequelize.INTEGER,
        disease: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Animal, { foreignKey: 'animal_id', as: 'animal' });
  }
}

module.exports = Vacination;
