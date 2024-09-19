import { createSlice } from "@reduxjs/toolkit"


export const resultReducer= createSlice({
    name: 'result',
    initialState:{
        userid :null,
        result: []
    },
    reducers:{
        setUserId:(state, acttion)=>{
            state.userid=acttion.payload
        }
    }
})

export const {setUserId} =resultReducer.actions 

export default resultReducer.reducer;
