import { NEW_PROGRAM, UPDATE_PROGRAM } from '../actions/action_programs.js';

export default function(state = {}, action) {
  switch(action.type) {
    case NEW_PROGRAM:
      return action.payload;
    case UPDATE_PROGRAM:
      return action.payload;
    default:
      return state;
  }
}
