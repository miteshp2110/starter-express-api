//This is for hospital endpoint to fetch name '/hospital/'
//Availaible Search paramaters 
//hospital/?city

const { pool } = require("../models/dbConnection")

//hospital/?speciality
const valid=['city','speciality']
const fetchHospital=(async (req,res)=>{
    var query=req.query
    const regex=/\s/
    
    const queryParams={}
    for(const key in query){    //loop over query and add in a Object
        var x=query[key]
        if(Object.hasOwnProperty.call(query,key) && x.length>0 && !regex.test(x) && valid.includes(key)){
            queryParams[key]=query[key]
        }
        else{
            return res.status(400).json({'error':`${key} not defined`})
        }
    }
    if(Object.keys(query).length===0){
        return res.status(400).json({'error':'Invalid Request type'})
    }
    else{
        if(query.speciality && query.city){
            try {
                const result=await  pool.query(`select * from hData where hSpecialization ilike '${query.speciality}%' and city ilike '${query.city}%'`)
                return res.json({"result":result.rows})
            } catch (error) {
                return res.status(500).json({"Error":"Database Error"})
                
            }
        }
        if(query.speciality){
            try {
                const result=await  pool.query(`select * from hData where hSpecialization ilike '${query.speciality}%'`)
                return res.json({"result":result.rows})
            } catch (error) {
                return res.status(500).json({"Error":"Database Error"})
                
            }
        }
        if(query.city){
            try {
                const result=await  pool.query(`select * from hData where city ilike '${query.city}%'`)
                return res.json({"result":result.rows})
            } catch (error) {
                return res.status(500).json({"Error":"Database Error"})
                
            }
            
        }
        res.status(200).json(queryParams)
    }
    
    //console.log(queryParams)
    
})
 

module.exports=fetchHospital