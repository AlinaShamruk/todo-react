import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCCJOwXM_C6gWU9ZoQKwKaFaExmrzWxpA4",
    authDomain: "alinadotodo.firebaseapp.com",
    databaseURL: "https://alinadotodo.firebaseio.com",
    projectId: "alinadotodo",
    storageBucket: "alinadotodo.appspot.com",
    messagingSenderId: "757953580129",
    appId: "1:757953580129:web:3eb9ef058e1df302472e20"
});

const db = firebase.firestore();
const auth = firebase.auth();


export { db, auth };