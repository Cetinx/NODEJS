const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');

const app = express()


//Template
app.set("view engine","ejs")







//Middlewares

app.use(express.static("public"))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/cars' })

  }))


mongoose.connect('mongodb+srv://Cetin:oVxOZ42k0s8dqG9w@nodeblog0.jkvmp.mongodb.net/NodeBlog0?retryWrites=true&w=majority',{

  
})

//Global veriable

global.userIN = null


//ROTES
app.use('*',(req,res,next)=> {
  userIN = req.session.userID
  next()
})


const Pageroute = require('./routes/pageRoute')
const carRoute = require('./routes/carRoute')
const categoryRote = require('./routes/categoryRote')
const userRoute = require('./routes/userRoute')

app.use('/' , Pageroute)
app.use('/car' , carRoute)
app.use('/categories' , categoryRote)
app.use('/users' , userRoute)




app.listen(process.env.PORT || 5000)