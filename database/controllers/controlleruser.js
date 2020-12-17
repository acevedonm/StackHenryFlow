//ESTE CONTROLADOR ES QUIEN SE CONECTA CON LA BASE DE DATOS
/* 
En definitiva es un objeto que tiene metodos dentro para que
en el front solo uses esos metodos sin ensuciar el codigo.
*/

import firebase from "firebase";
import "firebase/firestore";

const ControllerUser = {

  CreateUser: (values) => {
    const { email, password, username, name } = values;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("Usuario creado con exito");
        user.displayName = username;
        user.name = name;
        user.photoURL= "url"
      })
      .catch((error) => {
        console.log("No fue posible crear usuario");
        console.log(error);
      });
  }
  

};

export default ControllerUser;
