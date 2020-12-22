import firebase from "firebase";
import "firebase/firestore";

export const createUser = (values) => {
  const { email, password, username } = values;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("Usuario creado con exito");
      user.displayName = username;
    })
    .catch((error) => {
      console.log("No fue posible crear usuario");
      console.log(error);
    });
};

export const loginUser = (values) => {
  const { email, password } = values;
  let ref = firebase.auth().signInWithEmailAndPassword(email, password);
  return ref;
};

export const GetUserLogin = () => {
  let user = firebase.auth().currentUser;
  return user;
};
