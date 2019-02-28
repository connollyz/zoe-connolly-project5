import firebase from 'firebase'

// Initialize donutFlavors Firebase
const configOne = {
    apiKey: "AIzaSyC4o4nUVA87dpnhhv9ID7CTXORfmChNIZA",
    authDomain: "donutflavors-66cd1.firebaseapp.com",
    databaseURL: "https://donutflavors-66cd1.firebaseio.com",
    projectId: "donutflavors-66cd1",
    storageBucket: "",
    messagingSenderId: "205980993386"
};
firebase.initializeApp(configOne );



export default firebase;

