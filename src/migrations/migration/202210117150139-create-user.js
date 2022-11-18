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
        type: Sequelize.STRING(150)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      vin: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      imei: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      odometer: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      next_service: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      id_oem: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      last_login: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      last_activities: {
        allowNull: true,
        type: Sequelize.STRING(100)
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