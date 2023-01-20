import React, { useEffect,useState } from 'react'
import instance from '../axios';
import '../assets/Row.css'

const base_url="https://image.tmdb.org/t/p/original/"
export default function Row({title,fetchUrl,islarge}) {
    const [movies, setmovies] = useState([])
    useEffect(() => {
      async function getmoviedetails(){
        const request=await instance.get(fetchUrl)
        setmovies(request.data.results)
        
      }
      getmoviedetails()
    }, [fetchUrl])
    // console.log(movies)
  return (
    <>
    <div className="Row_container">
        <h3>{title}</h3> 
        <div className="row_posters">
            {movies.map((ele)=>{
              return <img className={`row_poster ${islarge && 'row_poster_large'}`} key={ele.id} src={`${base_url}${ele.poster_path}` ||`${base_url}${ele.backdrop_path}` } alt={ele.name} />
            })} 
        </div>
    </div>
    </>
  )
}
