import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCB5CulPMCcyEo6wdyIEmfJYemZlE2hiP8",
  authDomain: "rssdio.firebaseapp.com",
  projectId: "rssdio",
  storageBucket: "rssdio.appspot.com",
  messagingSenderId: "768516273959",
  appId: "1:768516273959:web:bdc737a4562a79e8e61b02",
  measurementId: "G-RE199M8Y4E",
  //
  // PUT YOUR CONFIG HERE
  //
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user.", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
