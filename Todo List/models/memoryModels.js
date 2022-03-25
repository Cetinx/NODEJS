const mongoose = require('mongoose')

const Schema = mongoose.Schema

const momSchema =  new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,       
        required:true,
        
    },
    creator:{
        type:String,       
      
        
    },
    image:{
        type:String,       
  
        
    },
    crateAt:{
        type:Date,       
        default:new Date()  
    },
       
})

 
const Memory = mongoose.model('Memory', momSchema)

module.exports = Memory