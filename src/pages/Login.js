import React from 'react';
import PropTypes from 'prop-types';

import Input from '../componentes/input';


class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleInput = this.handleInput.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  handleInput = ( { target }) => {
    const { name, value } = target;
    const { enableButton } = this;
    
    // this.setState({ [name]: value });
    this.setState({
      [name]: value,
    }, () => {
      enableButton();
    });
  }

  enableButton = () => {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (password.length >= PASSWORD_LENGTH && regex.test(email)) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }

  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <fieldset>
        <Input
          label="email: "
          type="email"
          name="email"
          value={ email }
          id="email"
          data-testid="email-input"
          onChange={ this.handleInput }
          // required
        />
        <Input
          label="senha: "
          type="password"
          name="password"
          value={ password }
          id="password"
          data-testid="password-input"
          onChange={ this.handleInput }
        />

        <button
          type="button"
          disabled={ isDisabled }
        >
          Entrar
        </button>

      </fieldset>      
    )
  }
}

export default Login;
