// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENT, SAVE_WALLET } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENT:
    return ({
      ...state,
      currencies: action.payload,
    });
  case SAVE_WALLET:
    return ({
      ...state,
      expenses: [...state.expenses,
        {
          ...action.payload,
          id: state.expenses.length,
        },
      ],
    });
  default:
    return state;
  }
}

export default wallet;
