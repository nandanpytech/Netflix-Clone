import React from 'react'
import { useState,useEffect } from "react"
import instance from '../axios';
import '../assets/Banner.css'


const base_url="https://image.tmdb.org/t/p/original/"
export default function Banner({fetchUrl}) {
    const [banner, setbanner] = useState([])
    useEffect(() => {
      async function fetchbanner(){
        const request=await instance.get(fetchUrl)
        const random_number=Math.floor(Math.random()*request.data.results.length-1)
        setbanner(request.data.results[random_number])
       
    //    return request;                                                        //it is essential
      }
      fetchbanner()
    }, [fetchUrl])
  return (
    <>
    <header className='banner' style={{backgroundImage:`url(${base_url}${banner.backdrop_path})`}}>
            <div className="info_container" >
                <h1 className='banner_title'> {banner?.title || banner?.name || banner?.original_name}</h1>
                <div className="info_buttons">
                  <button type="button" class="btn ">Play</button>
                  <button type="button" class="btn ">My liSt</button>
                </div>
                <div className="description">
                  {banner?.overview}
                </div>
            </div> 
            <div className="banner_fade"></div>
    </header>
    
    </>
  )
}
