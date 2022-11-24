'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log_page_visited', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        allowNull: true,
        type: Sequelize.STRING(150)
      },
      id_user: {
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

// [
// 	{
// 		"id": 12961, 
// 		"vno": "TX300", 
// 		"imei": 358979100106494, 
// 		"vin": null,
// 		"lat": -6.2424383,
// 		"lng": 106.6546856,
// 		"lad": "2022-09-21",
// 		"led": "2022-09-21",
// 		"bp": null,
// 		"sts": "Not Updated",
// 		"spd": 2,
// 		"odo": 33515,
// 		"pow": False,
// 		"ss": null,
// 		"ns": null,
// 		"phn": 9999999999,
// 		"eml": null,
// 		"alerts": []
// 	}
// ]