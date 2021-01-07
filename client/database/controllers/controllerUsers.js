import firebase from "firebase";
import "firebase/firestore";

export const createUser = (values) => {
  const { email, password } = values;
  let ref = firebase.auth().createUserWithEmailAndPassword(email, password);
  return ref;
};



export const loginUser = (values) => {
  const { email, password } = values;
  let ref = firebase.auth().signInWithEmailAndPassword(email, password);
  return ref;
};

export const loginWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider()
  var ref = firebase.auth().signInWithPopup(provider)
  return ref;
};

export const GetUserLogin = () => {
  let user = firebase.auth().currentUser;
  return user;
};

export const uploadPhoto = async (uri, filename)=>{
  // let user = (firebase.auth().currentUser || {}).uid;
   //const path = `photos/${user}/${Date.now()}.jpg`
   
   return new Promise(async (res, req)=>{
     const response = await fetch(uri)
     const file = await response.blob()
 
     let upload = firebase.storage().ref(filename).put(file)
     upload.on("state_changed", snapshot=>{
 
     }, err =>{
       req(err)
     },async ()=>{
       const url = await upload.snapshot.ref.getDownloadURL()
       res(url)
     })
   })
 }

export const updateUser = async (values) => {
  var user = firebase.auth().currentUser;
  var { displayName, photoURL, phoneNumber, email } = values;

  var ref = user.updateProfile({
    displayName,
    phoneNumber,
    email
  });

  let remoteUri = null
  try{
    let db = firebase.firestore().collection("users").doc(user.uid)

    if(photoURL){
      remoteUri = await uploadPhoto(photoURL, `avatars/${user.uid}`)
      user.updateProfile({
        photoURL: remoteUri
      })
/*       db.set({
        photoURL: remoteUri
      }, {merge: true}) */
    }
  }catch(error){
    alert("Error: ", error)
  }

  return ref;
};



export const resetPassword = (newPassword) => {
  var user = firebase.auth().currentUser;
  var ref = user.updatePassword(newPassword);
  return ref;

};
