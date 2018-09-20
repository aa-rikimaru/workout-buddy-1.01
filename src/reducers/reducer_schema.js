import { NEW_PROGRAM, SAVE_PROGRAM } from '../actions/action_programs.js';

export default function(state = {}, action) {
  console.log('State', state);
  switch(action.type) {
    case NEW_PROGRAM:
      return action.payload;
    case SAVE_PROGRAM:
      return action.payload;
    default:
      return state;
  }
}
