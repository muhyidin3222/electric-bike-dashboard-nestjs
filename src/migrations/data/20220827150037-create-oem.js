'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      video: {
        allowNull: true,
        type: Sequelize.STRING
      },
      video_default: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_course: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      id_seller: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_posting: {
        allowNull: false,
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

    await queryInterface.addIndex('videos', ['id_course']);
    await queryInterface.addIndex('videos', ['id_user']);
    await queryInterface.addIndex('videos', ['id_posting']);

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('videos');
  }
};