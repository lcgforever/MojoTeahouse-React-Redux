import { Map } from 'immutable';
import { SHOW_ERROR_MESSAGE } from '../actions/index';

const INITIAL_STATE = Map({
  showErrorMessage: false,
  errorMessage: ''
});

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
    return state.set('showErrorMessage', true).set('errorMessage', action.payload);

    default:
    return state;
  }
}
