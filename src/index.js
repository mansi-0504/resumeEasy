
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBMaW34uo1zaUMIeT0wdORiO-8D21bur6o",
//   authDomain: "resume-yt-9e26e.firebaseapp.com",
//   projectId: "resume-yt-9e26e",
//   storageBucket: "resume-yt-9e26e.appspot.com",
//   messagingSenderId: "1070979660486",
//   appId: "1:1070979660486:web:969255fdd64ff32b6a35c7"
// };

const firebaseConfig = {
  apiKey: "AIzaSyB5sE61mp8pNtJJwveQY8Oyw-z3b_tCYMY",
  authDomain: "resume-builder-7bd95.firebaseapp.com",
  projectId: "resume-builder-7bd95",
  storageBucket: "resume-builder-7bd95.appspot.com",
  messagingSenderId: "615387019276",
  appId: "1:615387019276:web:af464b8a35c858bc7a9629"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)))  //binding for redux to get firestore

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
); 