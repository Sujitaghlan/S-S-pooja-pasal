const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("pasal", "root", "", {
  host: "localhost",
  dialect: "mysql"
})

const databaseConnect = async () => {
  try{
    await sequelize.authenticate();
    console.log("Db Connected Successfully");
    await sequelize.sync();
  }catch(err){
    console.log(err);
  }
}

module.exports = {databaseConnect, sequelize};