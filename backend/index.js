const express = require('express');
const cors = require('cors');
require("dotenv").config()
const connectWithDb = require("./config/db");
const  route  = require('./routes/users.routes');

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req,res)=>{
   res.send("All Okay..!")
})
app.use("/api", route)


connectWithDb()
app.listen(process.env.PORT || 8000, (err) => {
  if (err) {
    console.log('Error in connecting to server: ', err);
  }
  console.log(`Server is running on port no. ${process.env.PORT}`);
});

// module.exports = app;
