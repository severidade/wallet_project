// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENT } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENT:
    return ({
      ...state,
      currencies: action.payload,
    });
  default:
    return state;
  }
}

export default wallet;
