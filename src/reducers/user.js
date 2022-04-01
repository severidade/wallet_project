// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  }
}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case SAVE_EMAIL:
      return ({
        email: action.payload,
      });
    default:
      return state;
  }
};

export default user;