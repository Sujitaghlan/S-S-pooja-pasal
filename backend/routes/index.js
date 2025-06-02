const express = require("express");
const {customerRouter} = require("./customer.router");

const router = express.Router();

router.use(customerRouter);

module.exports = {router};