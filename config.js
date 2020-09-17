import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyA5jv3VQa6cCmoEpp_ike8757X3qU6niHE",
    authDomain: "barter-system-847b2.firebaseapp.com",
    databaseURL: "https://barter-system-847b2.firebaseio.com",
    projectId: "barter-system-847b2",
    storageBucket: "barter-system-847b2.appspot.com",
    messagingSenderId: "55474777119",
    appId: "1:55474777119:web:dc4492d9a167916547792a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();