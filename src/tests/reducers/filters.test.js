import moment from 'moment'
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })   
})

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined,{ type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {
        type: 'SORT_BY_DATE'
    };

    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const text = 'hello';
    const state = filtersReducer(undefined,{ type: 'SET_TEXT_FILTER', text})
    expect(state.text).toBe(text);
})

test('should set start date filter', () => {
    const startDate = moment()
    const state = filtersReducer(undefined,{ type: 'SET_START_DATE',  startDate})
    expect(state.startDate).toEqual(startDate);
})

test('should set end date filter', () => {
    const endDate = moment()
    const state = filtersReducer(undefined,{ type: 'SET_END_DATE',  endDate})
    expect(state.endDate).toEqual(endDate);
})

