import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

// ADD EXPENSE

const addExpense = (
    { description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT EXPENSE
// SET TEXT FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    if (action.type === 'REMOVE_EXPENSE') {
        console.log('id: '+action.id)
    }
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
        default:
            return state;
    }
}


// handleDeleteOption = (optionToRemove) => {
//     this.setState ((prevState) =>  ({
//         options: prevState.options.filter((option) => optionToRemove !== option)
//      }))
//  };
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

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));



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


