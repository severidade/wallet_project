import React from 'react';
import PropTypes from 'prop-types';
// Componentes em React e as props children
// https://www.youtube.com/watch?v=IfN8F5cz7ZA

export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={ onClick }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
