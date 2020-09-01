import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';


test('Should render ExpensesSummary correctly',() => {
    const wrapper = shallow(<ExpensesSummary  expenses = {expenses} />);
    expect(wrapper).toMatchSnapshot();
})


test('Should render ExpensesSummary correctly',() => {
    const wrapper = shallow(<ExpensesSummary  expenses = {[expenses[0],expenses[2]]} />);
    expect(wrapper).toMatchSnapshot();
})