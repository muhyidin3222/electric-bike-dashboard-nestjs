'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aeris_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicle_number: {
        allowNull: true,
        type: Sequelize.STRING(250)
      },
      imei: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      vin: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      lat: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      lng: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      next_service: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      last_activation_date: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      license_expire_date: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      battery_level_percentage: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      speed: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      odometer: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      power: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      service_status: {
        allowNull: true,
        type: Sequelize.STRING(150)
      },
      next_status: {
        allowNull: true,
        type: Sequelize.STRING(150)
      },
      phone_number: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      alerts: {
        allowNull: true,
        type: Sequelize.STRING(500)
      },
      asset_id: {
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


// vno: {
//   allowNull: true,
//   type: Sequelize.STRING(250)
// },
// imei: {
//   allowNull: false,
//   type: Sequelize.STRING(100)
// },
// vin: {
//   allowNull: false,
//   type: Sequelize.STRING(150)
// },
// lat: {
//   allowNull: true,
//   type: Sequelize.STRING(100)
// },
// lng: {
//   allowNull: true,
//   type: Sequelize.STRING(100)
// },
// lad: {
//   allowNull: true,
//   type: Sequelize.STRING(100)
// },
// led: {
//   allowNull: true,
//   type: Sequelize.STRING(100)
// },
// bp: {
//   allowNull: true,
//   type: Sequelize.INTEGER
// },
// sts: {
//   allowNull: true,
//   type: Sequelize.STRING(100)
// },
// spd: {
//   allowNull: true,
//   type: Sequelize.INTEGER
// },
// odo: {
//   allowNull: true,
//   type: Sequelize.STRING(100)
// },
// pow: {
//   allowNull: false,
//   type: Sequelize.STRING(10)
// },
// ss: {
//   allowNull: true,
//   type: Sequelize.STRING(150)
// },
// ns: {
//   allowNull: true,
//   type: Sequelize.STRING(150)
// },
// phn: {
//   allowNull: true,
//   type: Sequelize.STRING(50)
// },
// eml: {
//   allowNull: false,
//   type: Sequelize.STRING(100)
// },
// alerts: {
//   allowNull: true,
//   type: Sequelize.STRING(500)
// },
// aid: {
//   allowNull: false,
//   type: Sequelize.INTEGER
// },