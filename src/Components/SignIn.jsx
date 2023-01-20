import {React,useState} from 'react'
import {useNavigate } from "react-router-dom";
import '../assets/SignIn.css'


export default function SignIn() {
  const navigate=useNavigate()
  const [user, setuser] = useState({email_or_number:"",password:""})

  const handleinput=(name)=>(e)=>{
    setuser({...user,[name]:e.target.value})
  }
  const loginsubmit=async(e)=>{
      e.preventDefault()
    const {email_or_number,password}=user
    const res=await fetch("http://localhost:5000/signin_", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        email_or_number,password
      })
    })

    const data=await res.json()
    if(!data){
      window.alert("Invalid Registeration")
    }else{
      window.alert("LogIn successfully")

      navigate("/")
    }
  }
  return (
    <>
        <div className="sign_in_background">
                <div className="input_box">
                    <p className="signIn_title">Sign In</p>
                    <form className='form' method='post'>
                          <input type="text" placeholder='Email ro phone number' onChange={handleinput("email_or_phone")} name="" id="" />
                          <input type="password" name="" id="" placeholder='Password' onChange={handleinput("password")} />
                          <input type="submit" onClick={loginsubmit} name="" id="submit" value="Sign In" />
                    </form>

                    <div className="help">
                        <div className="checkbox">
                          <input type="checkbox" name="" id="check" />
                          <label htmlFor="">Remember me</label>
                        </div>
                        <p>Need help?</p>
                      </div>

                      <div className="last">
                        <p>New to Netflix? <span className='sign_up_now'>Sign up now.</span></p>
                        <br />
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span id='learn'>Learn more.</span></p>
                      </div>
                </div>
           
        </div>
    </>
  )
}

