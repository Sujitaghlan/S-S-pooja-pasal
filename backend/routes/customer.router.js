const express = require("express");
const {register, login} = require("../controllers/customer.controller");

const customerRouter = express.Router();

customerRouter.post("/register", register);
customerRouter.post("/login", login);

module.exports = {customerRouter};