import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends Component {
  totalValue = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((i, curr) => {
      i += curr.value * curr.exchangeRates[curr.currency].ask;
      return i;
    }, 0);
    return total;
  }

  render() {
    const { email } = this.props;
    const { totalValue } = this;
    // const { email } = this.props;
    return (
      <header>
        <div className="email">
          <span className="label">E-mail:</span>
          <span data-testid="email-field">
            { `${email}` }
          </span>
        </div>
        <div className="expenses">
          <span className="label">Despesa:</span>
          <span data-testid="total-field">
            { `${totalValue().toFixed(2)}` }
          </span>
        </div>
        <div className="currency">
          <span className="label">Moeda:</span>
          <span data-testid="header-currency-field"> BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
