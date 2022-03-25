const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();



dotenv.config()

mongoose.connect('mongodb+srv://Cetin:8pfMqeJHdvwzcO7F@database.eaa3q.mongodb.net/TODOLIST?retryWrites=true&w=majority',{

   
}).then(() => console.log("Connect DataBase"))
  .catch((err) => console.log(err))  

  
  //Middle
  app.use(express.json()) // for parsing application/json
  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  app.use(cors())

const MemoryRout = require('./routers/MemoryRout')

app.use('/memories',MemoryRout)


app.get('/',(req,res) =>{

    res.send('hello world one')
})












app.listen(process.env.PORT || 5000 );