//ESTE CONTROLADOR ES QUIEN SE CONECTA CON LA BASE DE DATOS
/* 
En definitiva es un objeto que tiene metodos dentro para que
en el front solo uses esos metodos sin ensuciar el codigo.
*/

import firebase from "firebase";
import "firebase/firestore";

const ControllerUser = {

  CreateUser: (values) => {
    const { email, password, username, phone} = values;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("Usuario creado con exito");
        user.displayName = username;
        user.phoneNumber = phone
      
      })
      .catch((error) => {
        console.log("No fue posible crear usuario");
        console.log(error);
      });
  },
  Login: (values) =>{
    const email = values.email
    const password = values.password
    console.log(email)
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then((user) => {
        console.log("Estas Loggeado");
        console.log(user);
      })
      .catch((error) => {
        console.log("No fue posible Loggearte");
        console.log(error);
      });
  },

  GetUserLogin: () => {
    var user = firebase.auth().currentUser;
    console.log('user', user)
    return user;
  },


};

export default ControllerUser;
