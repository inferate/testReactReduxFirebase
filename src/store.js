import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRtGd6H-aoh9CEJwRo5Z0r72NPxocS_Ig",
  authDomain: "reactproject-f67fc.firebaseapp.com",
  databaseURL: "https://reactproject-f67fc.firebaseio.com",
  projectId: "reactproject-f67fc",
  storageBucket: "reactproject-f67fc.appspot.com",
  messagingSenderId: "529221290349"
};
const rrConfig = {
  userProfile: "users",
  userFirestoreProfile: true
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebaseReducer,
  firestore: firestoreReducer
});
/// Create initial state

const initialState = {};

// create store

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
