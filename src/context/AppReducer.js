export const AppReducer = (state, action) => {
    switch(action.type) {
        case "DELETE":
            return {
                ...state,
                transactions: state.transactions.filter(curr => curr.id !== action.info)  
            };
        case "ADD":
            return {
                ...state,
                transactions: [action.info, ...state.transactions],
                nextID: state.nextID + 1
            };
        default:
            return state;
    }
}