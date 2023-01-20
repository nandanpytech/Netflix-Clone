const express=require('express')
const app=express()
const router=express.Router();

//signIn
router.post("/signin_", async(req,res)=>{
    const {email_or_number,password}=req.body
   
})

module.exports=router