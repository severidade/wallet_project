import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { totalValue } = this.props;
    return (
      <header>
        <div className="email">
          <span>E-mail</span>
          <span data-testid="email-field"> AQUI ENTRA O E-MAIL</span>
        </div>
        <div>
          <span>Despesa</span>
          <span data-testid="total-field">
            { `${totalValue}` }
          </span>
        </div>
        <div>
          <span>Moeda</span>
          <span data-testid="header-currency-field"> BRL</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  totalValue: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  totalValue: [],
};

export default Header;
