import firebase from "firebase";
import "firebase/firestore";

export const createUser = (values) => {
  const { email, password } = values;
  let ref = firebase.auth().createUserWithEmailAndPassword(email, password);
  return ref;
};

export const loginUser = (values) => {
  const { email, password } = values;
  let ref = firebase.auth().signInWithEmailAndPassword(email, password);
  return ref;
};

export const loginWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider()
  var ref = firebase.auth().signInWithPopup(provider)
  return ref;
};

export const GetUserLogin = () => {
  let user = firebase.auth().currentUser;
  return user;
};

export const updateUser = (values) => {
  var user = firebase.auth().currentUser;
  var { displayName, photoURL } = values;

  var ref = user.updateProfile({
    displayName,
    photoURL,
  });

  return ref;
};

export const resetPassword = (newPassword) => {
  var user = firebase.auth().currentUser;
  var ref = user.updatePassword(newPassword);
  return ref;

};