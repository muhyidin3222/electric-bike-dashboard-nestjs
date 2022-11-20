'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('oem', 'logo', {
      allowNull: true,
      type: Sequelize.STRING(250)
    });
    await queryInterface.addColumn('oem', 'name', {
      allowNull: false,
      type: Sequelize.STRING(100)
    });
    await queryInterface.addColumn('oem', 'customer_service_phone_number', {
      allowNull: true,
      type: Sequelize.STRING(100)
    });
    await queryInterface.addColumn('oem', 'instagram', {
      allowNull: true,
      type: Sequelize.STRING(150)
    });
    await queryInterface.addColumn('oem', 'website', {
      allowNull: true,
      type: Sequelize.STRING(150)
    });
    await queryInterface.addColumn('oem', 'address', {
      allowNull: true,
      type: Sequelize.STRING(400)
    });

    await queryInterface.addColumn('vehicle_info', 'id_oem', {
      allowNull: true,
      type: Sequelize.INTEGER
    });

    await queryInterface.addIndex('oem', ['pic_email']);
    await queryInterface.addIndex('oem', ['name']);
    await queryInterface.addIndex('oem', ['pic_name']);
  },
  async down(queryInterface, Sequelize) {
  }
}