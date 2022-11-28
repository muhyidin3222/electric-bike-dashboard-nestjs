'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('driving_scoring', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hard_breaking_event: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      hard_acceleration_event: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hard_left_turn_event: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hard_right_turn_event: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      speeding_event: {
        allowNull: false,
        type: Sequelize.INTEGER
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