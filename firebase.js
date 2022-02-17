import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD-poYgom4NQhYDmiM9xL4IU0ypxZNEemQ",
  authDomain: "rn-instagram-clone-ad745.firebaseapp.com",
  projectId: "rn-instagram-clone-ad745",
  storageBucket: "rn-instagram-clone-ad745.appspot.com",
  messagingSenderId: "21509397267",
  appId: "1:21509397267:web:c3ab63765e5d395a7f58e6"
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }