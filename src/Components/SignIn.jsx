import React from 'react'
import '../assets/SignIn.css'


export default function SignIn() {
  return (
    <>
        <div className="sign_in_background">
                <div className="input_box">
                    <p className="signIn_title">Sign In</p>
                    <form className='form' action="">
                          <input type="text" placeholder='Email ro phone number' name="" id="" />
                          <input type="password" name="" id="" placeholder='Password' />
                          <input type="submit" name="" id="submit" value="Sign In" />
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

