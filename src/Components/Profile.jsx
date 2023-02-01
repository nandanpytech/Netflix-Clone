import {React,useEffect,useState} from 'react'
import '../assets/Profile.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';



export default function Profile() {
  const navigate=useNavigate()
  const [subscribed, setsubscribed] = useState("None")
  const [email, setemail] = useState("")
    const plans=["Mobile","Basic","Standard","Premium"]

    const callProfilePage=async()=>{
        try {
          const res=await fetch('/profile', {
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });
    
          const data=await res.json();
          setemail(data.email)
          if(!res.status===200 && !data){
           const error=new Error(res.error);
           throw error
          }
        } catch (error) {
         navigate('/signIn')
        }
      }
      const fetchPlans=async()=>{
        try {
          const res=await fetch('/subscription', {
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              email:email
            }),
            credentials:"include"
          });
    
          const data=await res.json();
          setsubscribed(data)
        } catch (error) {
          console.log(error)
        }
      }


      useEffect(() => {
        callProfilePage();
        fetchPlans()
      },)
      
  return (
    <>
    <div className="edit_profile">

        <h3 className="edit">Edit Profile</h3>
        <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.black',color:'white' }}
         subheader={
            <>
                <ListSubheader sx={{bgcolor:'var(--bs-gray-500)',color:'white',fontSize:'1rem'}} component="div" id="nested-list-subheader">
                {email}
                </ListSubheader>
                <Divider  sx={{color:'white'}} />
                <ListSubheader sx={{bgcolor:'black',color:'white',fontSize:'1.3rem',padding:'0'}} component="div" id="nested-list-subheader">
                Plans (Current Plan:{subscribed})
                </ListSubheader>
            </>
          }>
       {plans.map((value,id) => {
            const labelId = `checkbox-list-label-${id}`;
            return (
            <ListItem
                key={value}
                secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <Button className='subscriber' style={{
                          backgroundColor:`${subscribed===value?"var(--bs-gray-600)":"red"}`
                        }}  
                        variant="contained">
                         <NavLink style={{color:"white"}} to={`/in/3/${email}`}> 
                          {subscribed===value?"Subscribed":"Subscribe"}
                         </NavLink>
                    </Button>
                </IconButton>
                }
            >
                <ListItemButton role={undefined} dense>
                <ListItemText id={labelId} primary={`Netflix ${plans[id]}`} />
                </ListItemButton>
            </ListItem>
            );
        })}
            <Button className='sign_out' sx={{width:'100%',marginTop:'15px'}} color='error'  variant="contained">Sign out</Button>
        </List>
    </div>    


    </>
  )
}
