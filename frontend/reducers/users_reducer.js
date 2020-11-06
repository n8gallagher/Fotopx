import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions'

const usersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, prevState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return Object.assign({}, prevState, { [action.data.id]: action.data })
    default:
      return prevState;
  }
};

export default usersReducer;