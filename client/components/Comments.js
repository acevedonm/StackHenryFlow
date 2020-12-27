import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import { styles } from "../styles/styles";
import { AddComments } from "../database/controllers/controllerPost";

//Esto se tiene que renderizar en la pantalla postDetail
export const Comments = (props) => {
  const { id, comment } = props.data;
  const [comentario, setComentario] = useState("");

  const enviarComentario = () => {
    AddComments(id, comentario);
    setComentario("")
    props.navigation.navigate("PostsList");
  };

  return (
    <>
      {/* <Header navigation={navigation} /> */}
      <View style={styles.containerInput}>
        <View>
          <Text style={{ marginVertical: 10 }}>Comentarios:</Text>
          {comment.map((comentario, i) => {
            return (
              <Text key={i} style={styles.comentario}>
                {comentario}
              </Text>
            );
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
