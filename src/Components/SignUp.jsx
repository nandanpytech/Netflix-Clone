import React from 'react'
import '../assets/SignUp.css'
import tv from '../assets/photo/tv.png'
import mobile from '../assets/photo/mobile-0819.jpg'
import choto from '../assets/photo/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png'
import FAQ from './FAQ'


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
            <img src={mobile} alt="" />
          </div>
          <div className="component_desc">
          <h1>Download your shows to watch offline.</h1>
            <p>Save your favourites easily and always have something to watch.</p>
          
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
      <div className="component_1 component_2">
        <div className="components_video">
            <img src={choto} alt="" />
          </div>
          <div className="component_desc">
          <h1>Create profiles for children.</h1>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
      </div>
    </div>

    <FAQ></FAQ>
  </>
  )
}
