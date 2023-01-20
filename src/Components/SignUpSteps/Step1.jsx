import React from 'react'
import './css/step_nav.css'
import StepNavbar from './StepNavbar'
export default function Step1() {
  return (
    <>
    <StepNavbar></StepNavbar>
       <div className="container">
          <p>Step 1 of 3</p>
          <p className='welcome'>Welcome! <br/> Joining Netflix is easy.</p>
          <p>Enter your password and you'll be watching in not time.</p>
          <form className='form step_form' action="">
            <p>Email</p>
            <p className="step_email">nandanbilagi333@gmail.com</p>
            <input type="password" name="" id="" placeholder='Enter Password'  />
            <p className="blue">Forgot Password</p>
            <input type="submit"  name="" id="submit" value="Next" />
          </form>
    </div>
    </>
  )
}
