import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import { styles } from "../styles/styles";
import {AddComments} from "../../database/controllers/controllerPost"

//Esto se tiene que renderizar en la pantalla postDetail
export const Comments = (props) => {
   const {id, comment} = props.data
  
   


  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const enviarComentario = () => {
    setComentarios([...comentarios, comentario]);
    AddComments(id, comentario)
   props.navigation.navigate('PostsList')
    
  };

  useEffect(() => {
    console.log(comentarios)
  }, [comentarios])

  return (
    <>
      {/* <Header navigation={navigation} /> */}
      <View style={styles.containerInput}>
        <View>
         <Text>Comentarios:</Text>
          {comment.map((comentario, i) => {
            return <Text key={i} style={{color: "#fff"}} >{comentario}</Text>
          })}
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