import firebase from "firebase";
import "firebase/firestore";

export const createPost = (values) => {
  const { title, description, tag, user, fecha } = values;
  //verificar que los tags sean solo 3
  firebase
    .firestore()
    .collection("post")
    .add({
      title: title,
      description: description,
      tag: tag,
      comment: [],
      userId: user.uid,
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      fecha: fecha
    })
    .then(() => {
      console.log("Post creado con exito");
      return true;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetPosts = () => {
  let postRef = firebase.firestore().collection("post").get();
  return postRef;
};

export const searchInPost = async (value) => {
  try {
    var array = [];
    var postRef = await firebase.firestore().collection("post").get();
    postRef.docs.forEach((doc) => {
      var obj = { id: doc.id, ...doc.data() };
      let title = obj.title;
      let busqueda = value;
      let posicion = title.indexOf(busqueda);
      if (Array.isArray(obj.tags)) {
        let encontre = obj.tags.find((element) => (element = value));
        if (encontre) array.push(obj);
      }
      if (posicion !== -1) array.push(obj);
    });
    return array;
  } catch (error) {
    console.log("Error al buscar post en back");
    console.log(error);
  }
};

export const GetPost = (id) => {
  let postRef = firebase.firestore().collection("post").doc(id).get();
  return postRef;
};

export const AddComments = (id, comentario) => {
  let posteo = firebase.firestore().collection("post").doc(id);
  posteo.update({
    comment: firebase.firestore.FieldValue.arrayUnion(comentario),
  });
};
