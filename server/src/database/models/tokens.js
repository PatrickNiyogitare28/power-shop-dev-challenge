'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contract.init({
   // contract_id: DataTypes.INTEGER,
    id: {
      type:DataTypes.STRING,
      primaryKey: true},
    account_id: DataTypes.STRING,
    token: DataTypes.STRING,
    status: DataTypes.STRING,
    valid_days: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    units: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Token',
  });
  
  return Contract;
};