import {combineReducers, configureStore} from '@reduxjs/toolkit'
import questionReducer  from './ques_redx'
import  resultReducer  from './res_redx'

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

// create store with reducer
export default configureStore({reducer: rootReducer});