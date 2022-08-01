export const AppReducer = (state, action) => {
    switch(action.type) {
        case "DELETE":
            let newFrequencies = state.frequencies;
            if (newFrequencies[action.info.text] - 1 > 0) {
                return {
                    ...state,
                    transactions: state.transactions.filter(curr => curr.id !== action.info.id),
                    frequencies: {
                        ...state.frequencies,
                        [action.info.text]: state.frequencies[action.info.text] - 1
                    }
                };
            }
            else {
                delete newFrequencies[action.info.text];
                return {
                    ...state,
                    transactions: state.transactions.filter(curr => curr.id !== action.info.id),
                    frequencies: newFrequencies
                };
            }
        case "ADD":
            if (state.frequencies.hasOwnProperty(action.info.text)) {
                return {
                    ...state,
                    transactions: [action.info, ...state.transactions],
                    nextID: state.nextID + 1,
                    frequencies: {
                        ...state.frequencies,
                        [action.info.text]: state.frequencies[action.info.text] + 1,
                    }
                };
            }
            else {
                return {
                    ...state,
                    transactions: [action.info, ...state.transactions],
                    nextID: state.nextID + 1,
                    frequencies: {
                        ...state.frequencies,
                        [action.info.text]: 1
                    }
                };
            }
        case "SORT":
            let newTransactions = state.transactions;
            switch(action.newSort) {
                case "MR":
                    newTransactions.sort((a, b) => b.id - a.id);
                    break;
                case "LR":
                    newTransactions.sort((a, b) => a.id - b.id);
                    break;
                case "LS":
                    newTransactions.sort((a, b) => b.number - a.number);
                    break;
                case "SL":
                    newTransactions.sort((a, b) => a.number - b.number);
                    break;
                case "MF":
                    newTransactions.sort((a, b) => state.frequencies[b.text] - state.frequencies[a.text]);
                    break;
                case "LF":
                    newTransactions.sort((a, b) => state.frequencies[a.text] - state.frequencies[b.text]);
                    break;
                default:
                    break;
            }
            return {
                ...state,
                transactions: newTransactions,
                sortBy: action.newSort
            };
        default:
            return state;
    }
}