import React from 'react'
import '../assets/SignUp.css'
import tv from '../assets/photo/tv.png'

export default function SignUp() {
  return (
  <>
    <div className="signUp">
        <div className="showcase_signup">
            <div className="main_box">
                <p className="unlimited">
                  Unlimited movies, TV <br/>
                  shows and more.
                </p>
                <p className='watch'>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="email_address_home">
                <form action="">
                  <input className='home_email' type="text" placeholder='Email address'/>
                  <input className='home_submit' type="submit" value="Get Started "/>
                </form>
            </div>
        </div>
    </div>
    <div className="components">
      <div className="component_1">
          <div className="component_desc">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="components_video">
            <img src={tv} alt="" />
            <div className="original_video">
              <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
            </div>
          </div>
      </div>
      <div className="component_1 component_2">
        <div className="components_video">
            <img src={tv} alt="" />
            <div className="original_video">
              <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
            </div>
          </div>
          <div className="component_desc">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
      </div>
      <div className="component_1">
          <div className="component_desc">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="components_video">
            <img src={tv} alt="" />
            <div className="original_video">
              <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
            </div>
          </div>
      </div>
      <div className="component_1">
          <div className="component_desc">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="components_video">
            <img src={tv} alt="" />
            <div className="original_video">
              <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
            </div>
          </div>
      </div>
    </div>
  </>
  )
}
