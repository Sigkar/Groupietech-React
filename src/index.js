import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
let config = {
    apiKey: "AIzaSyCfmatyhFmtKBLrQc0HMUWk59cmEkbKRrg",
    authDomain: "groupietech.firebaseapp.com",
    databaseURL: "https://groupietech.firebaseio.com",
    projectId: "groupietech",
    storageBucket: "groupietech.appspot.com",
    messagingSenderId: "1071869820233"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
