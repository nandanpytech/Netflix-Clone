import React from 'react'
import StepNavbar from './StepNavbar'
import './css/step_nav.css'
import CheckIcon from '@mui/icons-material/Check';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router';



function createData(name, mobile, basic, standard, premium) {
    return { name, mobile, basic, standard, premium };
  }

  const redboxes=["Mobile","Basic","Standard","Premium"]


export default function Step3() {
    const [marked, setmarked] = useState("Mobile")
    const [Price_id_list, setPrice_id_list] = useState([])
    const {email}=useParams()
      
    const marked_red=(ele)=>{
        setmarked(ele.target.id)
      }

      const FetchPrices=async()=>{
        const response=await fetch('/prices', {
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        });
        const data=await response.json()
        setPrice_id_list(data.data)
      }
      const Session=async()=>{
        try {
            const res=await fetch('/session', {
                method:"POST",
                headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  email:email,
                  Price_Id:Price_id_list[3-redboxes.indexOf(marked)].id,
                }),
                credentials:"include"
              });
        
            const data=await res.json();
            window.location.href=data.url
         
          } catch (error) {
            console.log(error)
          }
      }


      const rows = [
        createData('Monthly price', "₹149" , "₹199",  "₹499",  "₹649"),
        createData('Video quality', "Good","Good", "Better", "Best"),
        createData('Resolution', "480p", "720p","1080p", "4k+HDR"),
        createData('Devices you can use to watch', "Phone", "Tablet","Computer", "Tv"),
      ];


      useEffect(() => {
        FetchPrices()
      }, [])
      
  return (
   <>
    <StepNavbar></StepNavbar>
    <div className="Step_two_second">
            <div className="container">
                <div className="step_2">
                <p>Step 2 of 3 
                    <h1>Choose the plan that’s right for you</h1>
                </p>
                </div>
                <div className="plan_lists">
                    <ul >
                    <span  className="plan_list">
                        <CheckIcon id="checkicon"></CheckIcon>
                        <li> Watch all you want. Ad-free.</li>
                    </span>
                    <span  className="plan_list">
                        <CheckIcon id="checkicon"></CheckIcon>
                        <li>Recommendations just for you.</li>
                    </span>
                    <span  className="plan_list">
                        <CheckIcon id="checkicon"></CheckIcon>
                        <li >Change or cancel your plan anytime.</li>
                    </span>
                    </ul>
                </div>
            </div>
            <div className="price_chart">
                <div className="red">
                    <div className="red_boxs">
                        {redboxes.map((ele,id)=>{
                           return  <div key={id} id={ele} onClick={marked_red}   className={ele===marked?"red_box marked":"red_box"}>{ele}</div>
                        })}
                    </div>
                </div>
                   
                <div className="price_table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell className='column_data' component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.mobile}</TableCell>
                            <TableCell align="right">{row.basic}</TableCell>
                            <TableCell align="right">{row.standard}</TableCell>
                            <TableCell align="right">{row.premium}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                 </TableContainer>
                </div>
            </div>

            <div className="next_button">
           <button type="button" onClick={Session} class="btn btn-danger">Next</button>
        </div>
    </div>
    <Footer></Footer>
   </>
  )
}
