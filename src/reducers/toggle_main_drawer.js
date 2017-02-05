import { Map } from 'immutable';
import { TOGGLE_MAIN_DRAWER } from '../actions/index';

const INITIAL_STATE = Map({
  mainDrawerOpen: false
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_MAIN_DRAWER:
    return state.set('mainDrawerOpen', !state.get('mainDrawerOpen'));

    default:
    return state;
  }
}
