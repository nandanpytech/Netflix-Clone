import React from 'react'
import '../assets/Profile.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';

export default function Profile() {
    const plans=["Mobile","Basic","Standard","Premium"]
  return (
    <>
    <div className="edit_profile">

        <h3 className="edit">Edit Profile</h3>
        <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.black',color:'white' }}
         subheader={
            <>
                <ListSubheader sx={{bgcolor:'var(--bs-gray-500)',color:'white',fontSize:'1rem'}} component="div" id="nested-list-subheader">
                nandanbilagi33@gmail.com
                </ListSubheader>
                <Divider  sx={{color:'white'}} />
                <ListSubheader sx={{bgcolor:'black',color:'white',fontSize:'1.3rem',padding:'0'}} component="div" id="nested-list-subheader">
                Plans (Current Plan:premium)
                </ListSubheader>
            </>
          }>
        {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
            <ListItem
                key={value}
                secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <Button className='subscriber' color='error' variant="contained">Subscriber</Button>
                </IconButton>
                }
            >
                <ListItemButton role={undefined} dense>
                <ListItemText id={labelId} primary={`Netflix ${plans[value]}`} />
                </ListItemButton>
            </ListItem>
            );
        })}
            <Button className='sign_out' sx={{width:'100%',marginTop:'15px'}} color='error' variant="contained">Sign out</Button>
        </List>
    </div>    


    </>
  )
}
