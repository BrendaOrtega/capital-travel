import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAm7njNWhIQZXKILoMC0XkmABCnn2vyVdo",
    authDomain: "chatcito-e81ec.firebaseapp.com",
    databaseURL: "https://chatcito-e81ec.firebaseio.com",
    projectId: "chatcito-e81ec",
    storageBucket: "chatcito-e81ec.appspot.com",
    messagingSenderId: "1094027890077"
};
firebase.initializeApp(config);

export default firebase;