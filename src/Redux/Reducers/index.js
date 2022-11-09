import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
const appReducer = combineReducers({
});

export default rootReducer = (state, action) => {
  return appReducer(state, action);
};

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
