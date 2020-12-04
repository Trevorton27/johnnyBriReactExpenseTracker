import React from 'react';

class Header extends React.Component {
  render() {
    const styles = {
      color: '#dc3545',
      backgroundColor: '#343a40',
      fontSize: '70px',
      paddingBottom: '25px',
      paddingTop: '12px'
    };
    return <h1 style={styles}> React Expense Tracker</h1>;
  }
}

export default Header;
