import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    updateJumbo : null,
    dataUpdate : {},
}

export const adminerPage = createSlice({
    name : "adminer",
    initialState,
    reducers : {
        setUpdate : (state,{payload}) => {
            state.updateJumbo = payload
        },
        setDataUpdate : (state,{payload}) => {
            state.dataUpdate = payload
        }
    }
})

export const {
    setUpdate,
    setDataUpdate
} = adminerPage.actions

export default adminerPage.reducer