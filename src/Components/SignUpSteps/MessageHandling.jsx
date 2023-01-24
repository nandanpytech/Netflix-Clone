import React from 'react'
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';

export default function MessageHandling({msg}) {
  return (
    <>
      <div className="message_handling">
        <ReportProblemRoundedIcon></ReportProblemRoundedIcon>
        <p className="messages">
            <strong> {msg}</strong>
            Try to <a href="/#">SignIn</a>
        </p>
    </div>
    </>
  )
}
