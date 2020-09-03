import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object',() => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object',() => {
    const action = editExpense('123abc',{
        description: 'test description',
        note: 'test note',
        amount: '12623',
        createdAt: 123456
    })
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'test description',
            note: 'test note',
            amount: '12623',
            createdAt: 123456
        }
    })
})

test('should setup add expense action object with provided values',() => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store',(done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note : 'this one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(1);
        done();
    });
})

test('should add expense with defaults to database and store',() => {
    
})

// test('should setup the add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             amount: 0,
//             createdAt: 0,
//             description: '',
//             note: '',
//             id: expect.any(String)
//         }
//     })
// })