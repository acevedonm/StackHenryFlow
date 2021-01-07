import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { styles } from "../styles/styles";
import { AddComments, AddLike, GetComments, DeleteComment } from "../database/controllers/controllerPost";
import { getUserLogin } from "../functions/getUserLogin";
import { TouchableOpacity } from "react-native-gesture-handler";


//Esto se tiene que renderizar en la pantalla postDetail
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
  
   
    console.log('entro a la funcion de likes')
  }

  const deleteComment = async(commentId) => {
    DeleteComment(id,commentId)
    console.log('entro en eliinar comentario')
  }

  const updateComment = async (commentId) => {
    console.log('entro en editar comentario')
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
                  {comentario.likes.length}
                </Text>
                
                
                <Button title="me gusta" color="#000000" onPress={() => onChageLike(comentario.id)} /> 
                <Button title="eliminar" color="#000000" onPress={() => deleteComment(comentario.id)} />
                <Button title="editar" color="#000000" onPress={() => updateComment(comentario.id)} />
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
