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
      <form className="expense_form">
        <label htmlFor="value">
          <span>Valor:</span>
          <input
            id="value"
            name="value-input"
            data-testid="value-input"
            placeholder="Qual o valor da despesa?"
            type="number"
            // value={ value }
            // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          <span>Descrição:</span>
          <input
            id="description"
            name="description-input"
            data-testid="description-input"
            placeholder="descreva a despesa"
            type="text"
            // value={ description }
            // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          <span>Moeda</span>
          <select
            id="currency"
            name="currency-input"
            data-testid="currency-input"
            // value={ currency }
            // onChange={ this.handleChange }
          >
            { currenciesAPI.map(
              (coin) => (<option key={ coin } value={ coin }>{coin}</option>),
            )}
          </select>
        </label>
        <label htmlFor="method">
          <span>Forma de pagamento</span>
          <select
            id="method"
            name="method-input"
            data-testid="method-input"
            // value= { method }
            // onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <span>Categoria</span>
          <select
            id="tag"
            name="tag-input"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
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
