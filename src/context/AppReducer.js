export const AppReducer = (state, action) => {
    switch(action.type) {
        case "DELETE":
            if (!state.aggregate.hasOwnProperty(action.info.text)) {
                return {
                    ...state,
                    transactions: state.transactions.filter(curr => curr.id !== action.info.id)
                }
            }
            else if (state.aggregate[action.info.text].count - 1 > 0) {
                return {
                    ...state,
                    transactions: state.transactions.filter(curr => curr.id !== action.info.id),
                    aggregate: {
                        ...state.aggregate,
                        [action.info.text]: {
                            ...state.aggregate[action.info.text],
                            count: state.aggregate[action.info.text].count - 1,
                            sum: state.aggregate[action.info.text].sum - action.info.number,
                            average: ((state.aggregate[action.info.text].sum - action.info.number) / (state.aggregate[action.info.text].count - 1)).toFixed(2),
                            min: Math.min(state.transactions.filter(curr => curr.id !== action.info.id).map(curr => curr.number)),
                            max: Math.max(state.transactions.filter(curr => curr.id !== action.info.id).map(curr => curr.number))
                        }
                    }
                };
            }
            else {
                delete state.aggregate[action.info.text];
                return {
                    ...state,
                    transactions: state.transactions.filter(curr => curr.id !== action.info.id),
                    aggregate: state.aggregate
                };
            }
        case "ADD":
            if (state.aggregate.hasOwnProperty(action.info.text)) {
                return {
                    ...state,
                    transactions: [action.info, ...state.transactions],
                    nextID: state.nextID + 1,
                    aggregate: {
                        ...state.aggregate,
                        [action.info.text]: {
                            ...state.aggregate[action.info.text],
                            count: state.aggregate[action.info.text].count + 1,
                            sum: state.aggregate[action.info.text].sum + action.info.number,
                            average: ((state.aggregate[action.info.text].sum + action.info.number) / (state.aggregate[action.info.text].count + 1)).toFixed(2),
                            min: state.aggregate[action.info.text].min > action.info.number ? action.info.number : state.aggregate[action.info.text].min,
                            max: state.aggregate[action.info.text].max < action.info.number ? action.info.number : state.aggregate[action.info.text].max
                        }
                    }
                };
            }
            else {
                return {
                    ...state,
                    transactions: [action.info, ...state.transactions],
                    nextID: state.nextID + 1,
                    aggregate: {
                        ...state.aggregate,
                        [action.info.text]: {
                            count: 1,
                            sum: action.info.number,
                            average: action.info.number,
                            max: action.info.number,
                            min: action.info.number
                        }
                    }
                };
            }
        case "SORT":
            let newTransactions = state.transactions;
            let newAggregateArr = Object.keys(state.aggregate);
            switch(action.newSort) {
                case "MR":
                    newTransactions.sort((a, b) => b.id - a.id);
                    break;
                case "LR":
                    newTransactions.sort((a, b) => a.id - b.id);
                    break;
                case "LtS":
                    newTransactions.sort((a, b) => b.number - a.number);
                    break;
                case "StL":
                    newTransactions.sort((a, b) => a.number - b.number);
                    break;
                case "LC":
                    newAggregateArr.sort((a, b) => state.aggregate[b].count - state.aggregate[a].count);
                    break;
                case "SC":
                    newAggregateArr.sort((a, b) => state.aggregate[a].count - state.aggregate[b].count);
                    break;
                case "LS":
                    newAggregateArr.sort((a, b) => state.aggregate[b].sum - state.aggregate[a].sum);
                    break;
                case "SS":
                    newAggregateArr.sort((a, b) => state.aggregate[a].sum - state.aggregate[b].sum);
                    break;
                case "LA":
                    newAggregateArr.sort((a, b) => state.aggregate[b].average - state.aggregate[a].average);
                    break;
                case "SA":
                    newAggregateArr.sort((a, b) => state.aggregate[a].average - state.aggregate[b].average);
                    break;
                case "LM":
                    newAggregateArr.sort((a, b) => state.aggregate[b].max - state.aggregate[a].max);
                    break;
                case "SM":
                    newAggregateArr.sort((a, b) => state.aggregate[a].max - state.aggregate[b].max);
                    break;
                case "Lm":
                    newAggregateArr.sort((a, b) => state.aggregate[b].min - state.aggregate[a].min);
                    break;
                case "Sm":
                    newAggregateArr.sort((a, b) => state.aggregate[a].min - state.aggregate[b].min);
                    break;
                default:
                    break;
            }
            return {
                ...state,
                transactions: newTransactions,
                aggregateArr: newAggregateArr,
                sortBy: action.newSort
            };
        default:
            return state;
    }
}