import { combineReducers } from 'redux-immutable';

import appBarState from './reducer_update_app_bar';
import loadDataState from './reducer_load_all_data';
import messageState from './reducer_update_message';

const rootReducer = combineReducers({
  appBarState,
  loadDataState,
  messageState
});

export default rootReducer;
