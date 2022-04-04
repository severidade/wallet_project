import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionSaveCurrent } from '../actions/index';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      currenciesAPI: [],
    };
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const { saveCurrencies } = this.props;
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await data.json();
    const currencies = Object.keys(response).filter((item) => item !== 'USDT');
    this.setState({
      currenciesAPI: currencies,
    });
    saveCurrencies(currencies);
  }

  render() {
    const { currenciesAPI } = this.state;
    console.log(currenciesAPI);
    return (
      <div className="expense_form">
        <p>Este sera o componente que irá adicionar as despesas</p>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  saveCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: (currencies) => dispatch(actionSaveCurrent(currencies)),
});

// export default ExpenseForm;
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
