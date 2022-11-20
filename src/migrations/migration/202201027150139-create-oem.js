'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('oem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pic_name: {
        allowNull: true,
        type: Sequelize.STRING(150)
      },
      pic_email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      pic_phone_number: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      last_status: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      date_last_status: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      status_active: {
        allowNull: false,
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
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addIndex('oem', ['created_at']);

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('oem');
  }
}