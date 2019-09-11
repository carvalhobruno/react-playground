var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyDweGiCtBvmqSR6HzE2wVEkgc6kE5tWzY8",
    authDomain: "app-consultas-251222.firebaseapp.com",
    databaseURL: "https://app-consultas-251222.firebaseio.com",
    projectId: "app-consultas-251222",
    storageBucket: "app-consultas-251222.appspot.com",
    messagingSenderId: "468339606650",
    appId: "1:468339606650:web:dca9c3b07e39008e"
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.database();
export default firebase;
