import React from 'react';
// para pegar o e-mail do redux
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import Header from '../componentes/Header';
import ExpenseForm from '../componentes/ExpenseForm';
import ExpenseTable from '../componentes/ExpenseTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalValue: 0,
    };
  }

  render() {
    const { totalValue } = this.state;
    // const { email } = this.props;
    return (
      <>
        <Header totalValue={ totalValue } />
        <ExpenseForm />
        <ExpenseTable />
      </>
    );
  }
}

// Wallet.propTypes = {
//   email: PropTypes.string.isRequired,
// };

// Lendo as informaçoes do redux
// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

export default Wallet;
// export default connect(mapStateToProps)(Wallet);
