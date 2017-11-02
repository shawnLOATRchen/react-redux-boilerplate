
import { combineReducers } from 'redux';

// reducers
import MyReducer from './my.reducer';

const rootReducer = combineReducers({
  myReducer: MyReducer
});

export default rootReducer;