'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING(250)
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addIndex('vehicle_info', ['created_at']);

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicle_info');
  }
};