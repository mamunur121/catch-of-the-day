import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXcNCTCn57n7MFu0L-LFOXUKMABQ9uWbQ",
  authDomain: "new-catch-of-the-day-d11e8.firebaseapp.com",
  databaseURL: "https://new-catch-of-the-day-d11e8.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
