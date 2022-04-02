import React, { Component } from 'react';

class Header extends Component {
  render() {
    // const { type, name, label, onChange, value, id, datatestid } = this.props;
    return (
      <header>
        <div className="email">
          <span>E-mail</span>
          <span data-testid="email-field"> AQUI ENTRA O E-MAIL</span>
        </div>
        <div>
          <span>Despesa</span>
          <span data-testid="total-field"> AQUI ENTRA A DESPESA</span>
        </div>
        <div>
          <span>Moeda</span>
          <span data-testid="header-currency-field"> BRL</span>
        </div>
      </header>
    );
  }
}

export default Header;
