import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDq8M4P8rEEiufPpP3Tf2h2ij4T-7cYTWs",
	authDomain: "bunkers-7dede.firebaseapp.com",
	projectId: "bunkers-7dede",
	storageBucket: "bunkers-7dede.appspot.com",
	messagingSenderId: "18764842495",
	appId: "1:18764842495:web:be75517238fdac732d93ca",
	measurementId: "G-TNL3FZ9MKJ",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
