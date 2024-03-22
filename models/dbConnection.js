const {Pool}=require('pg')
require('dotenv').config()

const pool=new Pool({
    user:process.env.pgUser,
    host:process.env.pgHost,
    database:process.env.pgDatabase,
    password:process.env.pgPassword,
    port:process.env.pgPort,
    ssl:true
})



    async function dbStatus(){
        try {
            const result= await pool.query('select * from test')
            return  result.rows.length>0           
            
        } catch (error) {
            console.log(error)
            return false
        }    
    }
    async function showStatus(){
        if(await dbStatus()){
            console.log("DB Status: True")
        }
        else{
            console.log("Db Status False")
        }
    }
    


module.exports={dbStatus,pool,showStatus}


