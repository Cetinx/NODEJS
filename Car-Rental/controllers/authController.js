const bcrypt = require('bcrypt');
const session = require('express-session')

const User = require('../models/User')
const Category = require('../models/Category')
const Car = require('../models/Car')


exports.createUser= async (req,res) => {
    
        try {
       const user = await User.create(req.body)
        res.status(201).render('login',{
            status:'succes',
            user
        })
    } catch (error) {
        res.status(400).json({
            status:'false',
            error
        })
    }

 
}



exports.loginUser= async (req,res) => {    
    try {
        
        const { email, pass } = req.body;

         User.findOne({ email }, (err, user) => {
          if (user) {
            bcrypt.compare(pass, user.pass, (err, same) => {
              if (same) {

                req.session.userID = user._id
                res.status(200).redirect('/users/dashborad')
                
              }
            });
          }
        });

    }
    
    catch (error) {
    res.status(400).json({
        status:'false',
        error
    })
}


}





exports.logoutUser= async (req,res) => {    
  try {

    req.session.destroy(()=>{
      res.redirect('/')
    })

  }
  
  catch (error) {
  res.status(400).json({
      status:'false',
      error
  })
}


}




exports.getDashboradPage = async(req,res) => {

  const user = await User.findOne({_id:req.session.userID}).populate('cars')

  const category = await Category.find()

  const cars = await Car.find({user:req.session.userID})

  res.render('dashborad' , {
    user,
    category,
    cars
  })

}