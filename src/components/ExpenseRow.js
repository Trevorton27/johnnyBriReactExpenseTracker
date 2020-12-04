import React from 'react';

const ExpenseRow = (props) => {
  console.log('expenseRow props: ', props);
  const expenses = props;
  console.log('expenses: ', expenses);
  expenses.map((expense, num) => {
    return (
      <tr key={num}>
        <td>{expense.date}</td>
        <td>{expense.desc}</td>
        <td>${expense.amount}</td>
        <td>{expense.place}</td>
        <td
          type='btn'
          onClick={(e) => this.props.deleteRow(expense.expenseId)}
          className='btn-danger'
          id='deleteButton'
        >
          X
        </td>
      </tr>
    );
  });
};

export default ExpenseRow;
