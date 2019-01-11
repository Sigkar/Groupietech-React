import * as firebase from 'firebase/app';
import 'firebase/auth';

const getUserStatus = function () {
  return new Promise(function (resolve, reject) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User is signed in");
        resolve( user );
      } else {
        console.log("User is not signed in");
        resolve( user );
      }
    });
  });
};

export { getUserStatus };