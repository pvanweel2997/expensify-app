import {createStore, combineReducers} from 'redux'

// ADD EXPENSE
// REMOVE EXPENSE
// EDIT EXPENSE
// SET TEXT FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

console.log(store.getState())

const demoState = {
    expenses: [{
        id:'2345',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}


