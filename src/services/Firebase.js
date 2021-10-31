import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAHsznOYxb5JiFcY8KWOyX2VF6QIabQ8QM",
    authDomain: "proyectoreactjs-16960.firebaseapp.com",
    projectId: "proyectoreactjs-16960",
    storageBucket: "proyectoreactjs-16960.appspot.com",
    messagingSenderId: "98518895635",
    appId: "1:98518895635:web:ad1931943a580dd64e03e6"
};


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
// return app
// }

export function getFirestore(){
    return firebase.firestore(app)
}