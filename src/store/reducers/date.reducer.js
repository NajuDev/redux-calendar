const today = new Date();

const initialState = {
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
};

export function dateReducer(
    state = initialState,
    action,
) {
    switch (action.type) {
        case 'SET_DATE':
            return {
                ...state,
                date: action.date,
            };
        case 'SET_MONTH':
            return {
                ...state,
                month: action.month,
            };
        case 'SET_YEAR':
            return {
                ...state,
                year: action.year,
            };
        default:
            return state;
    }
}
