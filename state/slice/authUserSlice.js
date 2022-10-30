import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShow : false,
    error : {}
}

export const authUser = createSlice({
    name : "authUser",
    initialState,
    reducers : {
        setShow : (state) => {state.isShow = !state.isShow},
        setError : (state,{payload}) => {
            const {error} = state
            error = {
                ...error,
                payload
            }
        }
    }
})

export const {
    setShow,
    setError
} = authUser.actions

export default authUser.reducer