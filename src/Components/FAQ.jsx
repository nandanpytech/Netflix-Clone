import React from 'react'
import '../assets/FAQ.css'
import data from '../faq'
import { useState } from 'react'
export default function FAQ() {
    const [faqs, setfaqs] = useState(data)

    const handleclick=(i)=>{
     setfaqs( faqs.map((ele,index)=>{
        if(index===i){
           ele.open=(!ele.open)
        }else{
           ele.open=false
        }
        return ele;
      })
     )
    }
  return (
    <>
        <div className="faq_section">
            <h1 className='faq_title'>Frequently Asked Question</h1>
            {faqs.map((faq,index)=>{
            return     <li key={index} className="item">
                            <button className="_faq" onClick={()=>handleclick(index)}>
                                <p>{faq.ques}</p>
                                <p>{faq.open?"close":"open"}</p>
                            </button>
                            <div className={faq.open?"item_desc":"no_item_desc"}>
                                <p className='faq_ans'>{faq.ans}</p>
                            </div>
                        </li>
            })}
        </div>
    </>
  )
}
