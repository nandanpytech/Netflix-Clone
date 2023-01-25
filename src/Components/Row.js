import React, { useEffect,useState } from 'react'
import instance from '../axios';
import '../assets/Row.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
import ListItem from './ListItem';

export default function Row({title,fetchUrl,islarge}) {
  const [slidenumber, setslidenumber] = useState(0)
    const [movies, setmovies] = useState([])
    useEffect(() => {
      async function getmoviedetails(){
        const request=await instance.get(fetchUrl)
        setmovies(request.data.results)
        
      }
      getmoviedetails()
    }, [fetchUrl])
    
    const listRef=useRef()
    const handleclick=(direction)=>{
      let distance=listRef.current.getBoundingClientRect().x-50
      if(direction==="left" && slidenumber>0){
        setslidenumber(prev=>prev-1)
        listRef.current.style.transform=`translateX(${330+distance}px)`
      }
      if(direction==="right" && slidenumber<12){
        setslidenumber(prev=>prev+1)
        listRef.current.style.transform=`translateX(${-230+distance}px)`
      }
      console.log(slidenumber)
    }

    //Icon style
    const styles={
      leftIcon:{
        fontSize:"2rem",
        top:"40%",
        width: "50px",
        height: "90px",
        zIndex:100,
        position:"absolute",
        left:0,
        cursor: "pointer",
        
      },
      RightIcon:{
        fontSize:"2rem",
        top:"40%",
        width: "50px",
        height: "90px",
        position:"absolute",
        right:0,
        cursor: "pointer"
      }
    }
  return (
    <>
    <div className="Row_container">
        <h3>{title}</h3> 
        <ArrowBackIosIcon style={styles.leftIcon} onClick={()=>handleclick("left")} className='slidearrow left'></ArrowBackIosIcon>
        <div className="row_posters"ref={listRef} >
            {movies.map((ele)=>{
              return <ListItem ele={ele} islarge={islarge}></ListItem>
            })} 
        </div>
        <ArrowForwardIosIcon style={styles.RightIcon} className='slidearrow right' onClick={()=>handleclick("right")}></ArrowForwardIosIcon>
       
    </div>
    </>
  )
}
