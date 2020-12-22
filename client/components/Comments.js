import React from "react"
import {StyleSheet, View, TextInput, Button, Alert } from "react-native"
import Header from "../components/Header"
import { styles } from "../styles/styles";


//Esto se tiene que renderizar en la pantalla postDetail
export const Comments = ( {navigation} )=>{

    /* const createAlert = () =>
    Alert.alert(
      "Listo!",
      "Comentario posteado",
      { cancelable: false }
    ); */
    
    return (
        <>
        {/* <Header navigation={navigation} /> */}
        <View style={styles.containerInput}>
            <TextInput placeholder="Escribe un comentario..." style={styles.comment}
            multiline = {true}
            numberOfLines = {4}/>
            <Button
        title="Comentar"
        color="#000000"
       // onPress={createAlert}
      />
            
        </View>
        </>
    )
}

export default Comments;