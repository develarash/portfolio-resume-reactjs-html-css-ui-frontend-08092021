import { createContext, useReducer } from "react";
export const ThemeContext= createContext();
const INITIAL_STATE ={darkMode:false};
const themreducer=(state,action)=>{
    switch(action.type){
        case "TOGGLE":
        return {darkMode:!state.darkMode};
        default:
            return state;
    }

};
export const ThemeProvider=(props)=>{
    const [state , dispatch]=useReducer(ThemeProvider,INITIAL_STATE)
return(
<ThemeContext.Provider  value={state, dispatch}>
    {props.children}
</ThemeContext.Provider>
)
}