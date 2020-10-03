import React, {createContext, useContext, useReducer} from 'react'
//Track the basket

//Data layer
export const StateContext = createContext()

export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
       {children}
    </StateContext.Provider>
) 


export const useStateValue = ()=> useContext(StateContext)