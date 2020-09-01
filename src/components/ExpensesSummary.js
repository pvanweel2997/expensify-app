import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummary = (props) => (
    <div>
        {props.expenses.length === 1 ? <p>viewing {props.expenses.length} expense totaling {numeral(props.total / 100).format('$0,0.00')}</p>
        : <p>viewing {props.expenses.length} expenses totaling {numeral(props.total / 100).format('$0,0.00')}</p>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters),
        total: expensesTotal(selectExpenses(state.expenses,state.filters))
    }
};

export default  connect(mapStateToProps)(ExpensesSummary);


