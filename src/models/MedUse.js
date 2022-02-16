const Sequelize = require('sequelize');
const { Model } = Sequelize;

class MedUse extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        dosage: Sequelize.FLOAT,
        employee: Sequelize.STRING,
        validity: Sequelize.DATE,
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

module.exports = MedUse;
