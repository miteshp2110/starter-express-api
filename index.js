const express=require('express')
const router = require('./routes/hospitalRoute')
const {showStatus} = require('./models/dbConnection')
const bodyParser = require('body-parser')
const app=express()
const cors=require('cors')
require('dotenv').config() 


showStatus()
app.use(cors())
app.get('/',((req,res)=>{
    res.json({"/hospital?city=<cityname>&speciality=<specialization>":"For getting results of hospital on basis of city and search. You can also use any either of it",
    "/search/city?name=<cityname>":"This endpoint is to give search results of all cities in search bar",
    "/search/speciality/?specialization=<specialization>":"This endpoint is for getting search result of specialization."
})
}))

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',require('./routes/hospitalRoute'))
app.use('/search',require('./routes/searchRoute'))
app.use('/admin',require('./routes/postRoutes'))
app.use('/db',require('./routes/guiRoutes'))

app.listen(process.env.PORT,()=>{
    console.log("Server running on: ",process.env.PORT)
})