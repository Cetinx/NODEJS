exports.getIndexPage = (req,res) => {
    console.log(req.session.userID);
    res.render('index')
   

}
exports.getAboutPage = (req,res) => {

    res.render('about')

}
exports.getServicesPage = (req,res) => {

    res.render('services')

}
exports.getCarPage = (req,res) => {
   
    res.render('car')
   

}


exports.getContactPage = (req,res) => {

    res.render('contact')

}
exports.getLoginPage = (req,res) => {

    res.render('login')

}
exports.getRegisterPage = (req,res) => {

    res.render('register')

}
exports.getCarOnePage = (req,res) => {

    res.render('carOne')

}

