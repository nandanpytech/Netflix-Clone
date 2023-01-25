import {React,useState} from 'react'
import './css/step_nav.css'
import MessageHandling from './MessageHandling'
import StepNavbar from './StepNavbar'


export default function Step1({email_or_password,handle_Email_password,setcount}) {
const [msg, setmsg] = useState("")
  const signup_form_handle=async(e)=>{
    e.preventDefault()
    const res=await fetch("/signup/password", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        email_or_password
      })
    })

    //To verify the response from the backend..
    let result = await res.json();
    if(result.message=="Successfully Registered"){
      setcount(prev=>prev+1)
    }else{
      result.error?setmsg(result.error):setmsg(result.message)
    }
  }

  return (
    <>
    <StepNavbar></StepNavbar>
       <div className="container">
      {msg &&  <MessageHandling msg={msg}></MessageHandling>}
          <p>Step 1 of 3</p>
          <p className='welcome'>Welcome! <br/> Joining Netflix is easy.</p>
          <p>Enter your password and you'll be watching in not time.</p>
          <form className='form step_form' method='post' action="">
            <p>Email</p>
            <p className="step_email">nandanbilagi333@gmail.com</p>
            <input type="password" onChange={handle_Email_password} name="password" id="" placeholder='Enter Password'  />
            <p className="blue">Forgot Password</p>
            <input type="submit" onClick={signup_form_handle}  name="" id="submit" value="Next" />
          </form>
    </div>
    </>
  )
}
