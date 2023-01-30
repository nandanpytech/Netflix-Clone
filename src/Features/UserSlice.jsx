import { createSlice } from "@reduxjs/toolkit";

export  const userslice=createSlice({
    name:"user",
    initialState:{
        user:{name:"j"},
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload
        },
        logout:(state)=>{
            state.user=null
        }
    }
})

export const { login,logout}=userslice.actions

//To get value from Component : Selectors
export const selectUser=(state)=>state.user.user

export default userslice.reducer