const { response } = require('express')
const {pool}=require('../../models/dbConnection')


const addHospital=(async (req,res)=>{
    var values=req.body
    
    const query=`INSERT INTO hData(city, hName, hSpecialization, hContact, hEmail, hAddress, hUrl)VALUES ($1,$2,$3,$4,$5,$6,$7)`
    const val=[values.city,values.hName,values.hSpecialization,values.hContact,values.hEmail,values.hAddress,values.hUrl]
    
    try{
        pool.query(query,val,(err,result)=>{
            
            if(err){
                
                return res.status(500).json({'error':'error while in database'})
            }
            
            
        })
        
        return res.status(201).json({'message':'Data added'})

    }
    catch(err){
        return res.status(500).json({'error':'Internal server error'})
    }
})

module.exports=addHospital