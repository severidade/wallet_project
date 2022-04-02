import React from 'react';
import Header from '../componentes/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalValue: 0,
    };
  }

  render() {
    const { totalValue } = this.state;
    return (
      <>
        <Header totalValue={ totalValue } />
        <p>vou colocar as coisas aqui</p>
      </>
    );
  }
}

export default Wallet;
