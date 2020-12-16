//ESTE CONTROLADOR ES QUIEN SE CONECTA CON LA BASE DE DATOS
/* 
En definitiva es un objeto que tiene metodos dentro para que
en el front solo uses esos metodos sin ensuciar el codigo.
*/

import firebase from "firebase";
import "firebase/firestore";

const Controller = {

  CreateUser: (values) => {
    const { email, password } = values;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("Usuario creado con exito");
        console.log(user);
      })
      .catch((error) => {
        console.log("No fue posible crear usuario");
        console.log(error);
      });
  },
  
};

export default Controller;
