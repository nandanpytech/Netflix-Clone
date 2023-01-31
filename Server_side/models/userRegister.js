const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt=require("bcryptjs")
const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    customerStripeId:{
        type:String,
        required:true,
    },

    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

userschema.pre("save",async function(next){
    if(this.password){
        this.password=await bcrypt.hash(this.password,10)
    }
    next()
})
userschema.methods.generateAuthtoken=async function(){
    try {
        const token=jwt.sign({id:this._id.toString()},"MynameisNandan")
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}
const Register=new mongoose.model("Netflix_Register",userschema)
module.exports=Register
