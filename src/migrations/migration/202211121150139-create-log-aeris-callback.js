'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log_aeris_callback', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      headers: {
        allowNull: true,
        type: Sequelize.STRING(1000)
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING(2000)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) { }
}