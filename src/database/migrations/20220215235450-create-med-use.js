'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('med_use', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dosage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      validity: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      employee: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      animal_id: {
        type: Sequelize.INTEGER,
        references: { model: 'animals', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('med_use');
  },
};
