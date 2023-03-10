const express=require('express')
const app=express()
const bcrypt=require("bcryptjs")
const User=require("../models/userRegister")
const router=express.Router();
const Authenticate=require('../Authenticate/authenticate')
const cookieParser=require('cookie-parser')
app.use(cookieParser())
const stripe=require('stripe')("sk_test_51MUuBZSGIUsypozAOjxbsp8T319jPH3Qac0IFiiNHLUGfalUgelkjSHmWu00LPmkoZuo2Uzy9WoopURMDWGHKmRX00qi8FGjeE")



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
               return  res.send({message:"Login Successfully",token:token,email:Userlogin.email})
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

    const customer=await stripe.customers.create({
        email
    },{
        apiKey:process.env.stripe_key
    })
    try {
        const Userexist=await User.findOne({email:email})
        if(Userexist){
            return res.status(422).send({error:"Email already exists"})
        }else{
            const user=new User({
                email,
                password,
                customerStripeId:customer.id,
                
            
            })
            const userRegister=await user.save()
            return res.status(200).send({message:"Successfully Registered",user:user})
        }

        
    } catch (error) {
        console.log(error)
    }
})

//another pages
router.get('/profile',Authenticate,(req,res)=>{
    return res.status(200).send(req.rootUser)
})

router.get('/home',Authenticate,(req,res)=>{
    return res.status(200).send(req.rootUser)
})

router.get('/subscription',async(req,res)=>{
    const Userexist=await User.findOne({email:req.body.email})
    const subscription=await stripe.subscriptions.list(
        {
            customer:Userexist.customerStripeId,
            status:"all",
            expand:["data.default_payment_method"]

        },
        {
            apiKey:process.env.stripe_key
        }
    )
    console.log(subscription)
    const plan=subscription.data[0].plan.nickname
    res.json(plan)
})





module.exports=router