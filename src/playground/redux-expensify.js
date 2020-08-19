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

const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// SET TEXT FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE

const setStateDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
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
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    })
}

// store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {  'amount': 500}))
store.dispatch(setTextFilter('rent'))

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStateDate(0))
// store.dispatch(setEndDate(999))
// store.dispatch(setStateDate())

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

const user = {
    name: 'Jen',
    age: 24
}

console.log({
    ...user,
    location: 'Waukee',
    age: 9
});
