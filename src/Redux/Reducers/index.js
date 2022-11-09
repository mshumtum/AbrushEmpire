import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import RegisterReducer from './RegisterReducer'

const appReducer = combineReducers({
  registerReducer: RegisterReducer
});

export default rootReducer = (state, action) => {
  return appReducer(state, action);
};

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
