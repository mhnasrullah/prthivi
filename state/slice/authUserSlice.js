import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShow : false
}

export const authUser = createSlice({
    name : "authUser",
    initialState,
    reducers : {
        setShow : (state) => {state.isShow = !state.isShow},
    }
})

export const {
    setShow,
} = authUser.actions

export default authUser.reducer