import firebase from "firebase";
import "firebase/firestore";

export const createPost = (values) => {
    const { title, description, tags } = values;
    //verificar que los tags sean solo 3
    firebase
      .firestore()
      .collection("post")
      .add({
        title: title,
        description: description,
        tags: "",
        comment: [],
      })
      .then(() => {
        console.log("Post creado con exito");
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
}

export const GetAllPosts = () => {
    let array = [];
    let postRef = firebase.firestore().collection("post");
    postRef
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => (array = [...array, doc.data()]));
        console.log(array);
        return array;
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  }

export const GetPosts = () => {
  let postRef = firebase.firestore().collection("post").get();
  return postRef;
};