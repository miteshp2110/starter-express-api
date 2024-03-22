const {dbStatus,pool}=require('../models/dbConnection')
const regex=/\s/
const citySearch=(async (req,res)=>{
    
        if(await dbStatus()){
            var name=req.query.name
            if(name==null){
                return res.status(400).json({'error':'Give a search paramater'})
            }
            
            if(name.length==0 || regex.test(name))
            {
                return res.status(400).json({'error':'Invalid Request type'})
            }
            else{
                try {
                    var result=await pool.query(`select distinct city from hData where city Ilike '${name}%'`)
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
module.exports=citySearch