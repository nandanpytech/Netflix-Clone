import React from 'react'
import StepNavbar from './StepNavbar'
import './css/step_nav.css'
import CheckIcon from '@mui/icons-material/Check';

export default function Step3() {
  return (
   <>
    <StepNavbar></StepNavbar>
    <div className="Step_two_second">
            <div className="container">
                <div className="step_2">
                <p>Step 2 of 3 
                    <h1>Choose the plan that’s right for you</h1>
                </p>
                </div>
                <div className="plan_lists">
                    <ul >
                    <span  className="plan_list">
                        <CheckIcon id="checkicon"></CheckIcon>
                        <li> Watch all you want. Ad-free.</li>
                    </span>
                    <span  className="plan_list">
                        <CheckIcon id="checkicon"></CheckIcon>
                        <li>Recommendations just for you.</li>
                    </span>
                    <span  className="plan_list">
                        <CheckIcon id="checkicon"></CheckIcon>
                        <li >Change or cancel your plan anytime.</li>
                    </span>
                    </ul>
                </div>
            </div>
            <div className="price_chart">

            </div>
    </div>

   </>
  )
}
