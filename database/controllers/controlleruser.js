//ESTE CONTROLADOR ES QUIEN SE CONECTA CON LA BASE DE DATOS
/* 
En definitiva es un objeto que tiene metodos dentro para que
en el front solo uses esos metodos sin ensuciar el codigo.
*/

import firebase from "firebase";
import "firebase/firestore";

const ControllerUser = {
  CreateUser: (values) => {
<<<<<<< HEAD
    const { email, password, username, phone} = values;
=======
    const { email, password, username } = values;
>>>>>>> 154249d4c5f464f76c4908ac36be1f08b7e37b76
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("Usuario creado con exito");
        user.displayName = username;
<<<<<<< HEAD
        user.phoneNumber = phone
      
=======
>>>>>>> 154249d4c5f464f76c4908ac36be1f08b7e37b76
      })
      .catch((error) => {
        console.log("No fue posible crear usuario");
        console.log(error);
      });
  },
  Login: async (values) => {
    const email = values.email;
    const password = values.password;
    console.log(email);
    var ref = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
/*       .then((user) => {
        console.log("Estas Loggeado");
        console.log(user);
      })
      .catch((error) => {
        console.log("No fue posible Loggearte");
        console.log(error);
      }); */
      return ref
  },

  GetUserLogin: () => {
    var user = firebase.auth().currentUser;
    console.log("user", user);
    return user;
  },
};

export default ControllerUser;
