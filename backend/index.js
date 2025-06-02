const express = require("express");
const {databaseConnect} = require("./config/database-connection");
const {Users} = require("./models");
const {router} = require("./routes");

const app = express();
const cors = require('cors');
app.use(cors()); // Allow all origins

// OR to allow specific origins
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json()); // ✅ This fixes your issue
//app.use(express.urlencoded({ extended: true })); // handles form data
const PORT = 3000;

databaseConnect();

app.use(router);

app.listen(PORT, (err) => {
  if(err){
    console.error("Failed to log a message");
  }
  else{
    console.log(`Server running on Port ${PORT}`);
  }
})