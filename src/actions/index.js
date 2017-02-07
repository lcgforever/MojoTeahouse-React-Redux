import * as Firebase from 'firebase';

// Action type constants
export const LOAD_ALL_DATA_STARTED = 'LOAD_ALL_DATA_STARTED';
export const LOAD_ALL_DATA_FINISHED = 'LOAD_ALL_DATA_FINISHED';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

// Initialize firebase
const config = {
  apiKey: "AIzaSyADLW0M50VtCnnpLiC2GV4MZpEIQeitJSc",
  authDomain: "mojotea-a28a6.firebaseapp.com",
  databaseURL: "https://mojotea-a28a6.firebaseio.com",
  storageBucket: "mojotea-a28a6.appspot.com",
  messagingSenderId: "331300490064"
};
Firebase.initializeApp(config);
const fDatabase = Firebase.database();

export function loadAllData() {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_DATA_STARTED
    });
    fDatabase.ref('data').once('value')
    .then((snapshot) => {
      dispatch({
        type: LOAD_ALL_DATA_FINISHED,
        payload: snapshot.val()
      });
    })
    .catch((error) => {
      dispatch({
        type: SHOW_MESSAGE,
        payload: error.message
      });
    });
  };
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE
  }
}
