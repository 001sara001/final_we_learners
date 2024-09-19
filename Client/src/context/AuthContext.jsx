import { createContext , useContext , useEffect , useReducer } from "react";

const initialstate ={
    user: null,
    token: null,
}
export const authContext = createContext(initialstate);

const authReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN_START':
            return{
                user:null,
                token: null
            };
        case 'LOGIN_SUCCESS':
             return{
              user:action.Payload.user,
              token:action.Payload.token,
            };
        case 'LOGOUT':
            return{
            user:null,
            token : null,
         };
         default: 
         return state;
        }
};
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <authContext.Provider value={{ user: state.user, dispatch }}>
          {children}
        </authContext.Provider>
      );
}