import * as firebase from "firebase"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAevIT3x0dR-cgP_57gBL4K9Qn7b-9CrPc",
  authDomain: "wedding-invitation-4408e.firebaseapp.com",
  databaseURL: "https://wedding-invitation-4408e.firebaseio.com",
  projectId: "wedding-invitation-4408e",
  storageBucket: "wedding-invitation-4408e.appspot.com",
  messagingSenderId: "958500552197"
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}