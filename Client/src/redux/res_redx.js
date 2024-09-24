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
        },
        updateResultAction: (state, action)=>{
            const {trace , checked} = action.payload;
            state.result.fill(checked, trace, trace+1)
        },
        resetResultAction: ()=>{
            return{
                userid :null,
                result: []
            }
        }

    },


})

export const {setUserId , pushResultAction , resetResultAction, updateResultAction} =resultReducer.actions 

export default resultReducer.reducer;
