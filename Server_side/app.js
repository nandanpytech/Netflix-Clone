const dotenv=require("dotenv")
const express=require('express')
const app=express()
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

//config path
dotenv.config({path:'./config.env'})
const port=process.env.PORT

//connecting Db
require('./db/conn')

//Link import to Auth file..
app.use(require('./Router/auth'))




app.listen(port,()=>{
    console.log("listening")
})