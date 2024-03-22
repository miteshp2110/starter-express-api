const {dbStatus,pool}=require('../models/dbConnection')
const regex=/\s/
const specialitySearch=(async (req,res)=>{
    
        if(await dbStatus()){
            var specialization=req.query.specialization
            if(specialization==null){
                return res.status(400).json({'error':'Give a search paramater'})
            }
            
            if(specialization.length==0 || regex.test(specialization))
            {
                return res.status(400).json({'error':'Invalid Request type'})
            }
            else{
                try {
                    var result=await pool.query(`select distinct hSpecialization from hData where hSpecialization Ilike '${specialization}%' or hSpecialization= 'Multi' `)
                    res.json({'result':result.rows})
                    
                } catch (error) {
                    return res.status(404).json({'error':'Server Error'})
                    
                }
            }
        }
        else{
            return res.status(500).json({'error':'Database connection Error'})
        }

})
module.exports=specialitySearch