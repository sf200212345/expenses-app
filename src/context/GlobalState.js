import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
    nextID: 0,
    transactions: [],
    frequencies: {},
    sortBy: ""
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(transaction) {
        dispatch({
            type: "DELETE",
            info: transaction
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD",
            info: transaction
        });
    }

    function changeSort(newSort) {
        if (newSort === "R") {
            dispatch({
                type: "SORT",
                newSort: state.sortBy
            });
        }
        else {
            dispatch({
                type: "SORT",
                newSort
            });
        }
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, nextID: state.nextID, frequencies: state.frequencies, deleteTransaction, addTransaction, changeSort}}>
            {children}
        </GlobalContext.Provider>
    );
}