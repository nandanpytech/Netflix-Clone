import React from 'react'
import { NavLink } from 'react-router-dom'
import  './css/step_nav.css'


export default function StepNavbar() {
  const style={
    color:'black'
  }
  return (
    <>
    <div className="step_nav">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
      <NavLink to='/signIn' style={style} className="step_sign">Sign In</NavLink>
    </div>
   
    </>
  )
}
