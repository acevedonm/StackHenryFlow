import firebase from "firebase";
import "firebase/firestore";

export const createPost = (values) => {
    const { title, description, tags, user } = values;
    //verificar que los tags sean solo 3
    firebase
      .firestore()
      .collection("post")
      .add({
        title: title,
        description: description,
        tags: tags,
        comment: [],
        userId: user.uid,
        email: user.email,
        name: user.displayName,
        photo: user.photoURL
      })
      .then(() => {
        console.log("Post creado con exito");
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
}

export const GetPosts = () => {
  let postRef = firebase.firestore().collection("post").get();
  return postRef;
};

export const GetPost = ( id ) => {
    let postRef = firebase.firestore().collection('post').doc(id).get()
    return postRef
}
