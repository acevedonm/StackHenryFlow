import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { styles } from "../styles/styles";
import { AddComments, AddLike } from "../database/controllers/controllerPost";
import { getUserLogin } from "../functions/getUserLogin";
import { TouchableOpacity } from "react-native-gesture-handler";

//Esto se tiene que renderizar en la pantalla postDetail
export const Comments = (props) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [comentario, setComentario] = useState("");
  const [meGusta, setMeGusta]= useState(false)
  const [count, setCount] = useState(0)
  const { id, comment } = props.data;

  const obtenerFecha = () => {
    console.log(comment)
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
      likes: count,
    };
    AddComments(id, comment);
    setComentario("");
    props.navigation.navigate("PostsList");
  };


  const onChageLike = () => {
    if(meGusta === false){
      setCount(() => count + 1)
      console.log(count)
      setMeGusta(true)
      AddLike(id,count)
    } else {
      setCount(() => count - 1)
    console.log(count)
      setMeGusta(false)
      AddLike(id,count)
    }
    
  }
  useEffect(() => {
    obtenerFecha();
  }, [currentUser, meGusta]);

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
                <Button title="me gusta" color="#000000" onPress={onChageLike} /> 
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
