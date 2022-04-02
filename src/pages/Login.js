import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionSaveEmail } from '../actions/index';
import Input from '../componentes/input';

class Login extends Component {
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

  handleInput = ({ target }) => {
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
    const { emailDispatch, history } = this.props;
    return (
      <fieldset>
        <Input
          label="email: "
          type="email"
          name="email"
          value={ email }
          id="email"
          datatestid="email-input"
          onChange={ this.handleInput }
          // required
        />
        <Input
          label="senha: "
          type="password"
          name="password"
          value={ password }
          id="password"
          datatestid="password-input"
          onChange={ this.handleInput }
        />
        <button
          type="button"
          disabled={ isDisabled }
        // onClick={ this.onSubmitForm }
          onClick={ () => {
            emailDispatch(email);
            history.push('/carteira');
          } }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

// Login.propTypes = {
// //   emailDispatch: PropTypes.func.isRequired,
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  // emailDispatch é um "apelido" para executarmos a nossa action creator
  // Nossa action creator é a função importada do arquivo actions
  // ou seja, actionSaveEmail,
  // que vai receber um e-amail como parâmetro
  // esse parâmetro é o estado do nosso componente
  // aqui estamos apenas avisando que vai existir um parâmetro
  // mas o estado do componente é passado no momento da execução
  emailDispatch: (value) => dispatch(actionSaveEmail(value)),
}
);

// export default Login;
export default connect(null, mapDispatchToProps)(Login);
