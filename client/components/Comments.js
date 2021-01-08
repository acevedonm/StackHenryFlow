import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { styles } from "../styles/styles";
import { AddComments, AddLike, GetComments, Dislike, GetMyLikes } from "../database/controllers/controllerPost";
import { getUserLogin } from "../functions/getUserLogin";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Comments = (props) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [comentario, setComentario] = useState("");
  const [ com, setCom] =useState([])
  const { id } = props.data;


  const obtenercomentarios = () => {
    GetComments(id).then((coment) => {
      setCom(coment.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })
  }

  const obtenerFecha = () => {
    getUserLogin().then((user) =>
      user ? setCurrentUser(user.user.email) : null
    );
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    setCurrentDate(
      date + "/" + month + "/" + year + " " + hours + ":" + min
    );
  };

  const enviarComentario = () => {
    obtenerFecha();
    let comment = {
      comentario: comentario,
      user: currentUser,
      fecha: currentDate,
      likes: [],
    };
    AddComments(id, comment);
    setComentario("");
    props.navigation.navigate("PostsList");
  };

  const onChageLike = async (commentId) => {
   const respuesta= await getUserLogin()
     let userId=  respuesta.user.uid
    AddLike(id, commentId ,userId)
  }

  const dislike = async(commentId) => {
     const respuesta= await getUserLogin()
     let userId=  respuesta.user.uid
    Dislike(id,commentId, userId)
  }
  const obtenerLikes = async (likes) => {
    const respuesta= await getUserLogin()
     let userId=  respuesta.user.uid
    likes.map((laik)=>{
      if(userId==laik.usuario){
       
      
      } else {
     
       
      }
    })
     
    
  }


  useEffect(() => {
    obtenerFecha();
    obtenercomentarios();
  }, [currentUser]);

  return (
    <>
      {/* <Header navigation={navigation} /> */}
      <View style={styles.containerInput}>
        <View>
          <Text style={{ marginBottom: 10, marginTop: 30 }}>Comentarios:</Text>
          { Array.isArray(com) ? com.map((comentario) => {
            
            return (
              <View style={styles.comentario} key={comentario.id}>
                <Text style={{ color: "#FFF", marginBottom: 5 }}>
                  {comentario.texto}
                </Text>
                <Text style={{ color: "#FFF", textAlign: "right" }}>
                  {comentario.user}
                </Text>
                <Text style={{ color: "#FFF", textAlign: "right" }}>
                  {comentario.fecha}
                </Text>
                <Text style={{ color: "#FFF", textAlign: "right" }}>
                  {obtenerLikes(comentario.likes), comentario.likes.length}
                </Text>
                  
                  <Icon name="thumb-down" size={20} color="white" onPress={() => dislike(comentario.id)} />
                   <Icon  name="thumb-up"  size={20} color="white" onPress={() => onChageLike(comentario.id)} /> 
                
               
                
                
              </View>
            );
          }): <> </> } 
        </View>
        <TextInput
          placeholder="Escribe un comentario..."
          style={styles.comment}
          multiline={true}
          numberOfLines={4}
          onChangeText={(comentario) => setComentario(comentario)}
          value={comentario}
        />
        <Button title="Comentar" color="#000000" onPress={enviarComentario} />
      </View>
    </>
          
  );
};

export default Comments;
