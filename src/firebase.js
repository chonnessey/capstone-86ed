import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const app = firebase.initializeApp ({
  apiKey: "AIzaSyDMbpYYoqv-ktV5IUbrWMq_zW4VW2JuDZs",
  authDomain: "eighty-sixed-76cf1.firebaseapp.com",
  projectId: "eighty-sixed-76cf1",
  storageBucket: "eighty-sixed-76cf1.appspot.com",
  messagingSenderId: "666872075005",
  appId: "1:666872075005:web:9c03d9fb02b08fb45f2494"
});

const db = app.firestore()
export const auth = app.auth()
export default db