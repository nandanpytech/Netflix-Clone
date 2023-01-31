import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/Navbar.css'


export default function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="left_navbar">
            <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <h4>TV</h4>
            <h4>Movies</h4>
            <h4>Sports</h4>
        </div>

        <div className="right">
          <NavLink to="/in" type="button">Join Now</NavLink>
          <NavLink to="/profile" type="button">Profile</NavLink>
        </div>

    </div>
    </>
  )
}
