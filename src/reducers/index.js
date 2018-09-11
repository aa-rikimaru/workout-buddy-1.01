import { combineReducers } from 'redux';
import ProgramReducer from './reducer_programs';

const rootReducer = combineReducers({
  program: ProgramReducer
});

export default rootReducer;
