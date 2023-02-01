const express=require('express')
const app=express()
const User=require("./models/userRegister")
const router=express.Router();
const Authenticate=require('./Authenticate/authenticate')
const dotenv=require("dotenv")
const stripe=require('stripe')(process.env.stripe_key)

//path to .env
dotenv.config({path:'./config.env'})





router.get("/prices",async(req,res)=>{
    const prices=await stripe.prices.list({
        apiKey:process.env.stripe_key
    })

    return res.send((prices))
})

router.post("/session",async(req,res)=>{
    const user=await User.findOne({email:req.body.email})
    const session=await stripe.checkout.sessions.create({
        mode:"subscription",
        payment_method_types:["card"],
        line_items:[
            {
                price:req.body.Price_Id,
                quantity:1
            }
        ],
        success_url:"http://localhost:3000/",
        cancel_url:"http://localhost:3000/in/3",
        customer:user.customerStripeId
    },
    {
        apiKey:process.env.stripe_key
    }
    )

    return res.json(session)
})


module.exports=router