import totalExpenses from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses';

test('should equal 195195',() => {
    const result = totalExpenses(expenses);
    expect(result).toBe(114195)
});

// test('should return 0 if no expenses',() => {
//     const result = totalExpenses([]);
//     console.log('result',result)
//     expect(result).toBe(0)
// })

// test('should add up correctly a single expense',() => {
//     const result = totalExpenses([expenses[0]]);
//     console.log('result',result)
//     expect(result).toBe(195)
// })


