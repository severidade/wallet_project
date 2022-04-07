import React, { Component } from 'react';

class ExpenseTable extends Component {
  render() {
    return (
      <div className="conteiner_expense_table">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> ---/---</td>
              <td>---/---</td>
              <td>---/---</td>
              <td>---/---</td>
              <td>---/---</td>
              <td>---/---</td>
              <td>---/---</td>
              <td>---/---</td>
              <td>---/---</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default (ExpenseTable);
