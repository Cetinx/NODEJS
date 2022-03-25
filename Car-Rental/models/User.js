const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const UserSchema =  new Schema({
   
    name:{
        type:String,     
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    
    },
    pass:{
        type:String,
        required:true
    
    },

    crateAt:{
        type:Date,       
        default:Date.now
    },
    role:{
      type:String,
      enum:["customer","officer","admin"],
      default:"customer"

    },
    cars:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Car'
    }]

})
 
UserSchema.pre('save', function (next){

    const user = this;
    bcrypt.hash(user.pass,10, (error,hash) => {
        user.pass = hash
        next()
    })

})

const User = mongoose.model('User', UserSchema)

module.exports = User