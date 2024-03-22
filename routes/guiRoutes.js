const express=require('express')
const router=express.Router()
const path=require('path')
const dirName = require('../returnDirectory')

router.route('/Administrator').get((req,res)=>{
    res.sendFile(path.join(dirName,'html','addHospital.html'))
})

module.exports=router