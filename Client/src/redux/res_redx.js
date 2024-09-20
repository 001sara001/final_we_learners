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
        },
        pushResultAction:(state,action)=>{
            state.result.push(action.payload)
        }
    },

})

export const {setUserId , pushResultAction} =resultReducer.actions 

export default resultReducer.reducer;
