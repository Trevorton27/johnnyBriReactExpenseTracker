import React from 'react';
import ExpenseRow from './ExpenseRow';

const Table = (props) => {
  console.log('table props: ', props);
  return (
    <div>
      <table className='table table-bordered table-hover'>
        <thead className='thead-dark thead-border'>
          <tr>
            <th>Date Of Expense</th>
            <th>Description of Expense</th>
            <th>Amount</th>
            <th>Where was purchase made?</th>
            <th>Delete Expense</th>
          </tr>
        </thead>
        <tbody style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          <ExpenseRow
            expenseId={props.expenses.id}
            date={props.expenses.date}
            desc={props.expenses.desc}
            amount={props.expenses.amount}
            place={props.expenses.place}
            deleteRow={props.deleteRow}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
