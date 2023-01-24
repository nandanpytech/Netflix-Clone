const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true
    // },
    email:{
        type:String,
        required:true,
        unique:true
    },
    // phone:{
    //     type:Number,
    //     required:true,
    //     unique:true
    // },
    password:{
        type:String,
    },
    // confirmpassword:{
    //     required:true
    // },
})

const Register=new mongoose.model("Netflix_Register",userschema)
module.exports=Register