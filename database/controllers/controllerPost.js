import firebase from "firebase";
import "firebase/firestore";

const ControllerPost = {
  CreatePost: (values) => {
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
  },
};

export default ControllerPost;
