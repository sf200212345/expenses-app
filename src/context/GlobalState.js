import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
    transactions: [
        { id: 0, text: "Bike", number: -50 },
        { id: 1, text: "Charity", number: -150 },
        { id: 2, text: "Paycheck", number: 990 },
        { id: 3, text: "TV", number: -550 },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    );
}