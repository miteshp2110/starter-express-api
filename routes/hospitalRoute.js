const express=require('express')
const fetchHospital = require('../controllers/getHospitalData')
const router=express.Router()
router.route('/hospital').get(fetchHospital)


module.exports=router