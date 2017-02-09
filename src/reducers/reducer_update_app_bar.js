import { Map } from 'immutable';
import { UPDATE_APP_BAR_LEFT_BUTTON, AppBarLeftButtonType } from '../actions/index';

const INITIAL_STATE = Map({
  appBarLeftButtonType: AppBarLeftButtonType.DRAWER
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_APP_BAR_LEFT_BUTTON:
    return state.set('appBarLeftButtonType', action.payload);

    default:
    return state;
  }
}
