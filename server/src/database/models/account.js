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
    first_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    account_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  
  return Contract;
};