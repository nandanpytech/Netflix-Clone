const express=require('express')
const app=express()
const bcrypt=require("bcryptjs")
const User=require("../models/userRegister")
const router=express.Router();
const Authenticate=require('../Authenticate/authenticate')
const cookieParser=require('cookie-parser')
app.use(cookieParser())


router.get('/',Authenticate,(req,res)=>{
    console.log("ho")
    return res.status(200).send(req.rootUser)
 })

//signIn
router.post("/signin_", async(req,res)=>{
    const {email,password}=req.body.user
    if(!email || !password){
        return res.status(400).send({error:"Please, fill the form."})
    }
    try {
    const Userlogin=await User.findOne({email:email})
    if(Userlogin){

            //Password checking
            const isMatch=await bcrypt.compare(password,Userlogin.password)
             //generate token
            const token=await Userlogin.generateAuthtoken()

             //Generate cookies
             res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true,
            })

            if(isMatch){
               return  res.send({message:"Login Successfully",token:token})
            }else{
             return   res.send({error:"User error"})
            }
       
    }
    } catch (error) {
        console.log(error)
    }
})


//signUp
router.post("/signup/password",async(req,res)=>{
    const{email,password}=req.body.email_or_password
    if(!email || !password){
        return res.status(402).send({message:"Fill the form correctly"})
    }
    try {
        const Userexist=await User.findOne({email:email})
        if(Userexist){
            return res.status(422).send({error:"Email already exists"})
        }else{
            const user=new User({email,password})
            const userRegister=await user.save()
            return res.status(200).send({message:"Successfully Registered",user:user})
        }
        // const UserRegister=User.findOne({email:email})
        // //Generate token
        // console.log(UserRegister.password)
        // const token=await UserRegister.generateAuthtoken()

        
    } catch (error) {
        console.log(error)
    }
})

//another pages
router.get('/profile',Authenticate,(req,res)=>{
    return res.status(200).send(req.rootUser)
})



module.exports=router