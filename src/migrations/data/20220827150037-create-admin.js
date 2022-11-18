'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      photo_default: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cover: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cover_default: {
        allowNull: true,
        type: Sequelize.STRING
      },
      date_of_birth: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      about: {
        allowNull: true,
        type: Sequelize.STRING(500)
      },
      version: {
        allowNull: true,
        type: Sequelize.STRING(5)
      },
      video_link: {
        allowNull: true,
        type: Sequelize.STRING
      },
      location: {
        allowNull: true,
        type: Sequelize.STRING
      },
      saldo: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      before_saldo: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
    });

    await queryInterface.addIndex('sellers', ['created_at']);
    await queryInterface.addIndex('sellers', ['email']);
    await queryInterface.addIndex('sellers', ['password']);
    await queryInterface.addIndex('sellers', ['phone']);

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sellers');
  }
};