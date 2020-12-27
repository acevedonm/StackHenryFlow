import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { styles } from "../styles/styles";
import { AddComments } from "../database/controllers/controllerPost";
import { getUserLogin } from "../functions/getUserLogin";

//Esto se tiene que renderizar en la pantalla postDetail
export const Comments = (props) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [comentario, setComentario] = useState("");
  const { id, comment } = props.data;

  const obtenerFecha = () => {
    getUserLogin().then((user) =>
      user ? setCurrentUser(user.user.email) : null
    );
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    );
  };

  const enviarComentario = () => {
    obtenerFecha();
    let comment = {
      comentario: comentario,
      user: currentUser,
      fecha: currentDate,
      valoracion: [],
    };
    AddComments(id, comment);
    setComentario("");
    props.navigation.navigate("PostsList");
  };

  useEffect(() => {
    obtenerFecha();
  }, [currentUser]);

  return (
    <>
      {/* <Header navigation={navigation} /> */}
      <View style={styles.containerInput}>
        <View>
          <Text style={{ marginBottom: 10, marginTop: 30 }}>Comentarios:</Text>
          {comment.map((comentario, i) => {
            return (
              <View style={styles.comentario} key={i}>
                <Text style={{ color: "#FFF", marginBottom: 5 }}>
                  {comentario.comentario}
                </Text>
                <Text style={{ color: "#FFF", textAlign: "right" }}>
                  {comentario.user}
                </Text>
                <Text style={{ color: "#FFF", textAlign: "right" }}>
                  {comentario.fecha}
                </Text>
              </View>
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
