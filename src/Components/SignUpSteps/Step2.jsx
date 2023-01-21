import React from 'react'
import StepNavbar from './StepNavbar'
import CheckIcon from '@mui/icons-material/Check';
import Footer from '../Footer'

export default function Step2() {
  return (
    <>
    <StepNavbar></StepNavbar>
    <div className="container">
        <img className='right_logo' src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="" />
        <div className="step_2">
          <p>Step 2 of 3 
            <h1>Choose Your plan.</h1>
          </p>
        </div>
        <div className="plan_lists">
            <ul >
              <span  className="plan_list">
                <CheckIcon id="checkicon"></CheckIcon>
                <li> No commitments, cancel anytime.</li>
              </span>
              <span  className="plan_list">
                <CheckIcon id="checkicon"></CheckIcon>
                <li>Everything on Netflix for one low price.</li>
              </span>
              <span  className="plan_list">
                <CheckIcon id="checkicon"></CheckIcon>
                <li >No ads and no extra fees. Ever.</li>
              </span>
            </ul>
        </div>
        <div className="next_button">
           <button type="button" class="btn btn-danger">Next</button>
        </div>
    </div>
    <Footer></Footer>
    </>
    
  )
}
