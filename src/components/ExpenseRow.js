import React from 'react';

const ExpenseRow = (props) => {
  console.log('expenseRow props: ', props);
  const expenses = props;
  console.log('expenses: ', expenses);

  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.desc}</td>
      <td>${props.amount}</td>
      <td>{props.place}</td>
      <td
        style={{ cursor: 'pointer' }}
        type='btn'
        onClick={(e) => props.deleteRow(props.expenseId)}
        className='btn-danger'
        id='deleteButton'
      >
        X
      </td>
    </tr>
  );
};

export default ExpenseRow;
