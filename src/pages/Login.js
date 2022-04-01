import React from 'react';
import PropTypes from 'prop-types';

import Input from '../componentes/input';


class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="senha: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Button type="button" label="Enviar" onClick={ this.onSubmitForm } />
      </fieldset>      
    )
  }
}

export default Login;
