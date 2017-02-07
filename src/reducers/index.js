import { combineReducers } from 'redux-immutable';

import loadDataState from './load_all_data';
import messageState from './show_or_hide_message';

const rootReducer = combineReducers({
  loadDataState,
  messageState
});

export default rootReducer;
