import {React,useState} from 'react'
import {NavLink,useNavigate } from "react-router-dom";
import '../assets/SignIn.css'



export default function SignIn() {
  const navigate=useNavigate()
  const [user, setuser] = useState({email:"",password:""})

  const handleinput=(name)=>(e)=>{
    setuser({...user,[name]:e.target.value})
  }
  const loginsubmit=async(e)=>{
    e.preventDefault()
    const res=await fetch("/signin_", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        user
      })
    })
   

    const data=await res.json()
    if(data.error){
      window.alert("Invalid Registeration")
    }else{
      window.alert("LogIn Successfully")
      if(!localStorage.getItem("user")){
        localStorage.setItem("user",data.email)
      }
      navigate('/home')

    }
  }
  return (
    <>
        <div className="sign_in_background">
                <div className="input_box">
                    <p className="signIn_title">Sign In</p>
                    <form className='form' method='POST'>
                          <input type="text" placeholder='Enter your email'  onChange={handleinput("email")} name="" id="" />
                          <input type="password" name=""  placeholder='Password'  onChange={handleinput("password")} />
                          <input  onClick={loginsubmit} style={{cursor:"pointer"}} name="" id="submit" value="Sign In" />
                    </form>

                    <div className="help">
                        <div className="checkbox">
                          <input type="checkbox" name="" id="check" />
                          <label htmlFor="">Remember me</label>
                        </div>
                        <p>Need help?</p>
                      </div>

                      <div className="last">
                        <p>New to Netflix? <NavLink to="/" className='sign_up_now' >Sign up now.</NavLink></p>
                        <br />
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span id='learn'>Learn more.</span></p>
                      </div>
                </div>
           
        </div>
    </>
  )
}

