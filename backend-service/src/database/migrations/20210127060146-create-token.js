'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tokens', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      account_id: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      valid_days:{
        type: Sequelize.INTEGER
      },
      amount:{
        type: Sequelize.INTEGER
      },
      units:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tokens');
  }
};
