import { combineReducers } from 'redux';
import ProgramReducer from './reducer_program';
import SchemaReducer from './reducer_schema';

const rootReducer = combineReducers({
  program: ProgramReducer,
  schema: SchemaReducer
});

export default rootReducer;
