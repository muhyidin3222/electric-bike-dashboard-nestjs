'use strict';

const { STRING } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trip_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cost: {
        allowNull: true,
        type: Sequelize.STRING(150)
      },
      distance: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      start_time: {
        allowNull: false,
        type: STRING(100),
      },
      end_time: {
        allowNull: false,
        type: STRING(100),
      },
      start_location: {
        allowNull: false,
        type: STRING(250),
      },
      end_location: {
        allowNull: false,
        type: STRING(250),
      },
      start_lat: {
        allowNull: false,
        type: STRING(50),
      },
      end_lat: {
        allowNull: false,
        type: STRING(50),
      },
      start_lng: {
        allowNull: false,
        type: STRING(50),
      },
      end_lng: {
        allowNull: false,
        type: STRING(50),
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