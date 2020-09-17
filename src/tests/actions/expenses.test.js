import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, 
         addExpense, 
         editExpense, 
         removeExpense, 
         setExpenses, 
         startSetExpenses, 
         startRemoveExpense,
         startEditExpense
    } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'abc123';
const defaultAuthState = { auth: { uid }};

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description,amount,note,createdAt}) => {
        expensesData[id] = {description,amount,note,createdAt}
    })

    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

test('should setup remove expense action object',() => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove expense from firebase',(done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id
    store.dispatch(startRemoveExpense(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy(); // same as null
    })
    done();
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

test('should edit expense in firebase',(done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21045 }
    console.log('updates',updates)
    store.dispatch(startEditExpense(id,updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`usrs/${uid}/expenses/${id}`).once('value')
        done();
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount)
    })
    done();
})

test('should setup add expense action object with provided values',() => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store',(done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note : 'this one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        // returning a promise
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => { // tresolve for the promise above (return databse.ref)
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})

test('should add expense with defaults to database and store',(done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        amount: 0,
        note : '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
        // returning a promise
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => { // resolve for the promise above (return databse.ref)
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
})

test('should setup set expense action object wtih data',() => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});
// done means to wait for asynchrous stuff to happen first.  Will run test when done() is called
test('should fetch the expenses from firebase',(done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

