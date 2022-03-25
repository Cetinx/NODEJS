const mongoose = require('mongoose')
const slugify = require('slugify') 
const Schema = mongoose.Schema

const CarSchema =  new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    desc:{
        type:String,       
        required:true,
        
    },
    buy:{
        type:String,       
        required:true,
        
    },
    crateAt:{
        type:Date,       
        default:Date.now    
    },
    slug:{
        type:String,
        unique:true,
    
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,     
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,     
    }

})
CarSchema.pre('validate',function(next){
    this.slug = slugify(this.name ,{
        lower:true,
        strict:true
    })
    next()
})
 
const Car = mongoose.model('Car', CarSchema)

module.exports = Car