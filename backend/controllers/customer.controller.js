const { Users } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const register = async (req, res) => {
  const {name, email} = req.body;
  const existingUser = await Users.findOne({where: {email}});
  const password = "Test@123";
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  if(existingUser){
    console.log("User exists already");
    res.status(409).json({ message: "User exists already"});
  }

  else{
    const user = Users.build({name, email, password: hashedPassword});
    await user.save();
    res.json({message: "User Registered Successfully"});
  }
}

const login = async (req, res) => {
  const {email, password} = req.body;
  const existingUser = await Users.findOne({where: {email}});
  if(existingUser){
    const isValidPassword = bcrypt.compareSync(password, existingUser.password);
    if(!isValidPassword){
      res.status(401).json({message: "Incorrect password"});
    }else{
      res.status(200).json({message: "Login Successfull"});
    }
  }
  else{
    res.status(404).json({message: "User doesn't exist"});
  }
}

module.exports = {register, login};