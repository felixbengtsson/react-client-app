import { createStore, combineReducers, compose} from 'redux'
import firebase from 'firebase'
import 'firebase/firestore'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
// Reducers
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyAc7xv3uGAz_fvfpsckOvPV0SxpfXlMm2w",
    authDomain: "reactclientpanel-688aa.firebaseapp.com",
    databaseURL: "https://reactclientpanel-688aa.firebaseio.com",
    projectId: "reactclientpanel-688aa",
    storageBucket: "reactclientpanel-688aa.appspot.com",
    messagingSenderId: "273966860927"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

// Init firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  }) 

const initialState = {}

// Create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;