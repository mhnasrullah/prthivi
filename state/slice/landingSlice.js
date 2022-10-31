import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data : {}
}

export const landingPage = createSlice({
    name : "landingPage",
    initialState,
    reducers : {
        setData : (state,{payload}) => {
            state.data = payload},
    }
})

export const {
    setData,
} = landingPage.actions

export default landingPage.reducer