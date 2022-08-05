// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
  mainReducer
});
export default rootReducer;
