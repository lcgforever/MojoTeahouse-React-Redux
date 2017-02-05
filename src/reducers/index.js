import { combineReducers } from 'redux';

import ToggleMainDrawerReducer from './toggle_main_drawer';
import LoadAllDataReducer from './load_all_data';
import ShowMessageReducer from './show_or_hide_message';

const rootReducer = combineReducers({
  mainDrawerState: ToggleMainDrawerReducer,
  loadDataState: LoadAllDataReducer,
  messageState: ShowMessageReducer
});

export default rootReducer;
