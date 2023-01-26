import {React,useState} from 'react'
import PlayArrow from '@mui/icons-material/PlayArrow';
import Add from '@mui/icons-material/Add';
import '../assets/Row.css'
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import  ThumbUpAltOutlined  from '@mui/icons-material/ThumbUpAltOutlined';
import data from '../assets/Video/sample.mp4'

export default function ListItem({islarge,ele}) {
    const base_url="https://image.tmdb.org/t/p/original/"
    const [video, setvideo] = useState(false)
  return (
   <>
   <div className="listItem" >
  {video?<img className={`row_poster ${islarge && 'row_poster_large'}`} key={ele.id} src={`${base_url}${ele.poster_path}` ||`${base_url}${ele.backdrop_path}` } alt={ele.name} />:
    <video width="320" height="240"  >
        <source src={data} type="video/mp4"/>
    </video>
}
    <div className="itemInfo">
        <div className="icons">
             <PlayArrow></PlayArrow>
            <Add></Add>
            <ThumbUpAltOutlined></ThumbUpAltOutlined>
            <ThumbDownOutlined></ThumbDownOutlined>
        </div>

        <div className="itemInfoTop">
        <span> 1 hour 14 mins</span>
        <span className="limit">+16</span>
        <span>1999</span>
    </div>
    <div className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non facere
    </div>
    <div className="genre">Action</div>
            
    </div>

  
   </div>
  

   </>
  )
}
