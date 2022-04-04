import React, { Component } from 'react';
import PropTypes from 'prop-types';

// para pegar o e-mail do redux
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { totalValue, email } = this.props;
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
            { `${totalValue}` }
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

Header.propTypes = {
  totalValue: PropTypes.arrayOf(PropTypes.object),
  email: PropTypes.string.isRequired,
};

Header.defaultProps = {
  totalValue: [],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// export default Header;
export default connect(mapStateToProps)(Header);
