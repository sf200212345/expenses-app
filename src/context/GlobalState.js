import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
    nextID: 0,
    transactions: [],
    //has props min, max, sum, average, count for each prop
    aggregate: {},
    aggregateArr: [],
    alphabetSorted: [],
    sortBy: "MR"
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
        <GlobalContext.Provider value={{transactions: state.transactions, nextID: state.nextID, aggregate: state.aggregate, aggregateArr: state.aggregateArr, alphabetSorted: state.alphabetSorted, deleteTransaction, addTransaction, changeSort}}>
            {children}
        </GlobalContext.Provider>
    );
}