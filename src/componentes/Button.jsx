import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, isDisabled } = this.props;
    return (
      <button type="button" disabled={ isDisabled } onClick={ onClick }>
        { label }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
