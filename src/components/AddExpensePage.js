import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense));
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };
  render(){
    return (
      <div>
        <h1>Add expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

const mapStateToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined,mapStateToProps)(AddExpensePage);
