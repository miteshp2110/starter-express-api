const express=require('express')
const router=express.Router()
const addHospital=require('../controllers/postControllers/addHospital')
router.route('/addHospital').post(addHospital)

module.exports=router