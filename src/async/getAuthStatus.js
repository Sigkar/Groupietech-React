import * as firebase from 'firebase/app';
import 'firebase/auth';

async function getUserStatus () {
    return new Promise(function (resolve) {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            resolve( user );
          } else {
            resolve (false);
          }
        });
      });
}

export { getUserStatus };