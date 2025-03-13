import {createSlice} from "@reduxjs/toolkit";

const prodSlice=createSlice({
    name:"prod",
    initialState:{
        link:"http://localhost:100",
    }
});

export default prodSlice;