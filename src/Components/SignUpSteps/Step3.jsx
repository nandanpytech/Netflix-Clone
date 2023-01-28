import React from 'react'
import StepNavbar from './StepNavbar'
import './css/step_nav.css'
import CheckIcon from '@mui/icons-material/Check';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';
import { useState } from 'react'

export default function Step3() {
    const [marked, setmarked] = useState("Mobile")
    function createData(name, mobile, basic, standard, premium) {
        return { name, mobile, basic, standard, premium };
      }

      const redboxes=["Mobile","Basic","Standard","Premium"]
      
      const rows = [
        createData('Monthly price', "₹149" , "₹199",  "₹499",  "₹649"),
        createData('Video quality', "Good","Good", "Better", "Best"),
        createData('Resolution', "480p", "720p","1080p", "4k+HDR"),
        createData('Devices you can use to watch', "₹649", 3.7, 67, 4.3,9),
      ];

      const marked_red=(ele)=>{
        setmarked(ele.target.id)
      }
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
                        {redboxes.map((ele)=>{
                           return  <div  id={ele} onClick={marked_red} className={ele===marked?"red_box marked":"red_box"}>{ele}</div>
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
           <button type="button" class="btn btn-danger">Next</button>
        </div>
    </div>
    <Footer></Footer>
   </>
  )
}
