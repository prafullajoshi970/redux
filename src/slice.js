import { createSlice } from "@reduxjs/toolkit";
const themeSlice=createSlice({
    name:"Theme",
    initialState:{
        isLight:true,
    },
    reducers:{
        setIsLight:(stateObj,action)=>{
            stateObj.isLight=!stateObj.isLight;
        }
    }
})

export const { setIsLight} = themeSlice.actions;
export default themeSlice.reducer;