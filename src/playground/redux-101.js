import {createStore} from 'redux';

// Action generators

const add = ({a,b}) => {
    return a + b;
}

console.log(add({ a: 5, b: 10}))
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const descrementCount = ({ decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count} ) => ({
    type: 'SET',
    count

})

// Reducers
// 1) Reducers are pure functions
// 2) Never change state or action

const countReducer = (state = { count: 0 },action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        case 'SET':
            return {
                count: state.count = action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount());

store.dispatch({
    type: "RESET"
});

store.dispatch(descrementCount())

store.dispatch(descrementCount({ decrementBy: 5}))

store.dispatch(resetCount())

store.dispatch(setCount({count:102}))
// store.dispatch({
//     type: "SET",
//     count: 101
// });



