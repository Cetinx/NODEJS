const Car = require('../models/Car')
const Category = require('../models/Category')
const User = require('../models/User')

exports.crateCar = async (req,res) => {
    
        try {
       const car = await Car.create({
           name:req.body.name,
           desc:req.body.desc,
           buy:req.body.buy,
           category:req.body.category,
           user:req.session.userID

       })

        res.status(201).redirect('car')

    } catch (error) {
        res.status(400).json({
            status:'false',
            error
        })
    }

 
}


exports.getAllCar = async (req,res) => {
    
    try {
    const categorySlug = req.query.categories;
    
    const category = await Category.findOne({slug:categorySlug})

    let filter = {}

    if(categorySlug){
        filter = {category:category._id}
    }
    
   const cars = await Car.find(filter)

   const categories = await Category.find()
   
    res.status(201).render('car',{      
        cars,
        categories
    })
} catch (error) {
    res.status(400).json({
        status:'false',
        error
    })
}


}


exports.getCar = async (req,res) => {
    
    try {
        const user = await User.findById(req.session.userID);
   const car = await Car.findOne({slug:req.params.slug}).populate('user')
    res.status(201).render('carOne',{      
        car,
        user
    })
} catch (error) {
    res.status(400).json({
        status:'false',
        error
    })
}


}



exports.buyCar = async (req,res) => {
    
    try {
        const user = await User.findById(req.session.userID);
        await user.cars.push({_id:req.body.carsID});
        await user.save();
    res.status(201).redirect('/users/dashborad')

} catch (error) {
    res.status(400).json({
        status:'false',
        error
    })
}


}

exports.deleteCar = async (req,res) => {
    
    try {
        const user = await User.findById(req.session.userID);
        await user.cars.pull({_id:req.body.carsDeleteID});
        await user.save();
  
    res.status(201).redirect('/users/dashborad')

} catch (error) {
    res.status(400).json({
        status:'false',
        error
    })
}


}