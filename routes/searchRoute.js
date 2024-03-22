const express=require('express')
const citySearch = require('../controllers/citySearch')
const specialitySearch = require('../controllers/specialitySearch')
const router=express.Router()

// routes for search 
// '/search/'
router.route('/city').get(citySearch)  // '/search/city'
router.route('/speciality').get(specialitySearch)

module.exports=router