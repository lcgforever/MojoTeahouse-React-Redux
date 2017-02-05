import { combineReducers } from 'redux';

import ToggleMainDrawerReducer from './toggle_main_drawer';
import LoadAllDataReducer from './load_all_data';
import ShowErrorMessageReducer from './show_error_message';

const rootReducer = combineReducers({
  mainDrawerState: ToggleMainDrawerReducer,
  loadDataState: LoadAllDataReducer,
  errorMessageState: ShowErrorMessageReducer
});

export default rootReducer;
