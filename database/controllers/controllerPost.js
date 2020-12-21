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
  //ESTA FUNCION RETORNA UN ARREGLO DE POST
  GetAllPosts: async () => {
    let postRef = firebase.firestore().collection('post')
    var array = []
     var ref = await postRef.get()
/*       .then(snapshot => {
        snapshot.forEach(doc => {
          array.push(doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      }); */
    return ref
  },
  GetPost: async (id)=>{
    let postRef = firebase.firestore().collection('post').doc(id)
    var ref = await postRef.get()
    return ref
  }
};

export default ControllerPost;
