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
  let postRef = firebase.firestore().collection("post").orderBy("fecha", "desc").get();
  return postRef;
};


export const GetMyPosts = () => {
  let postRef = firebase.firestore().collection("post")
  let user = firebase.auth().currentUser;

  var query = postRef.where("userId","==",user.uid).get()
  console.log(user)
  return query;
};

export const GetMyLikes = (id, commentId) => {
  let likeRef = firebase.firestore().collection("post").doc(id).collection("comments").doc(commentId)
  let user = firebase.auth().currentUser;

  var query = likeRef.where( like= "usuario","==",user.uid).get()
  console.log(likeRef)
  return query;
};


export const searchInPost = async (value) => {
  try {
    var array = [];
    var postRef = await firebase.firestore().collection("post").get();
    postRef.docs.forEach((doc) => {
      var obj = { id: doc.id, ...doc.data() };
      let title = obj.title.toUpperCase();
      let busqueda = value.toUpperCase();
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

export const GetSomethingsPosts = (pagination) => {
  let postRef = firebase.firestore().collection("post").limit(pagination).get();
  return postRef;
};
export const GetComments = (id) => {
  let commentRef = firebase.firestore().collection("post").doc(id).collection("comment").orderBy("likes", "desc").get();
  return commentRef;
};

export const AddComments = (id, props) => {
  const {comentario, user, fecha,likes} = props
  let posteo = firebase.firestore().collection("post").doc(id).collection("comment").add({
    texto: comentario,
    likes,
    user,
    fecha
  });
};

export const AddLike = (id, commentId, userId) => {
 
     let refComentario = firebase.firestore().collection("post").doc(id).collection("comment").doc(commentId)
  refComentario.update({ 
    likes: firebase.firestore.FieldValue.arrayUnion({usuario:userId}),
  });
};

export const Dislike = (id, commentId, userId) => {
 
  let refComentario = firebase.firestore().collection("post").doc(id).collection("comment").doc(commentId)
refComentario.update({ 
 likes: firebase.firestore.FieldValue.arrayRemove({usuario:userId}),
});
};

export const DeleteComment = (id,commentId) => {
 console.log(id, commentId)
  let refComentario = firebase.firestore().collection("post").doc(id)
 var removeComment= refComentario.update({ 
 commentId: firebase.firestore.FieldValue.delete(),
});
};


