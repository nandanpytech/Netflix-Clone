import React, { createContext,useState } from 'react'


export const Accountcontext=createContext(null)
export default function UserContext({children}) {
    const [user, setuser] = useState("nandan")
  return (
    <Accountcontext.Provider value={{user,setuser}}>
        {children}
    </Accountcontext.Provider>
  )
}
