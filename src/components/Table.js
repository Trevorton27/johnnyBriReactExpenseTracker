import React from "react";
import ExpenseRow from "./ExpenseRow";

class Table extends React.Component {
  render() {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark thead-border">
            <tr>
              <th>Date Of Expense</th>
              <th>Description of Expense</th>
              <th>Amount</th>
              <th>Where was purchase made?</th>
              <th>Delete Expense</th>
            </tr>
          </thead>
          <tbody style={{ fontWeight: "bold", fontStyle: "italic" }}>
            {this.props.expenses.map((item, key) => (
              <ExpenseRow
                expenseId={this.props.expenses[key].id}
                date={this.props.expenses[key].date}
                desc={this.props.expenses[key].desc}
                amount={this.props.expenses[key].amount}
                place={this.props.expenses[key].place}
                item={item}
                key={key}
                deleteRow={this.props.deleteRow}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
