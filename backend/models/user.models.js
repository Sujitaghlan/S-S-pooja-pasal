const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/database-connection");

const Users = sequelize.define("Users", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  }
})

module.exports = {Users};