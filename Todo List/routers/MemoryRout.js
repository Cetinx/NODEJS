const express = require("express");
const mongoose = require("mongoose");

const Memory = require("../models/memoryModels");

const router = express.Router();

router.get('/',async(req,res) => {
    try {
        const memories = await Memory.find()
        res.status(200).json(memories)


    } catch (error) {
        res.status(404).json('Bulunamadı' + error)
    }
}) 

router.get('/:id',async(req,res) => {
    try {
        const {id} = req.params
        const memories = await Memory.findById(id)
        res.status(200).json(memories)


    } catch (error) {
        res.status(404).json({message:'Memory not found'})
    }
}) 

router.post('/',async(req,res) => {
    try {

        const memories = await Memory.create(req.body)
        res.status(200).json(memories)


    } catch (error) {
        res.status(404).json({message:'Memory not found'})
        console.log(error);
    }
}) 


router.put('/:id',async(req,res) => {

       try {
        const {id} = req.params

        const {title,content,creator,image} = req.body
        
        const memories = await Memory.findByIdAndUpdate(id,{title,content,creator,image,_id:id},{new:true})
        res.status(200).json(memories)


    } catch (error) {
        res.status(404).json({message:'Memory not found'})
        console.log(error);
    }

}) 

router.delete('/:id',async(req,res) => {

    try {
        const {id} = req.params
        const memories = await Memory.findByIdAndDelete(id)
        res.status(200).json({message:'Memory has been deleted'})


    } catch (error) {
        res.status(404).json({message:'Memory not found'})
    }

}) 

module.exports = router