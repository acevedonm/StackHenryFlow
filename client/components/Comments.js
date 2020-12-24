import React, { useState, useEffect} from "react"
import {StyleSheet, View, TextInput, Button, Alert } from "react-native"
import Header from "../components/Header"
import { styles } from "../styles/styles";


//Esto se tiene que renderizar en la pantalla postDetail
export const Comments = ( {navigation} )=>{

    const [comentario, setComentario] = useState(null)

    let comentarios= []

    

    const enviarComentario = () => {
      comentarios.push(comentario)
      console.log('comentario',comentarios)
    }
    
    return (
        <>
        {/* <Header navigation={navigation} /> */}
        <View style={styles.containerInput}>
            <TextInput placeholder="Escribe un comentario..." style={styles.comment}
            multiline = {true}
            numberOfLines = {4}
            onChangeText={comentario => setComentario(comentario)}
            value={comentario}
            />
            <Button
        title="Comentar"
        color="#000000"
        onPress={enviarComentario}
      />
            
        </View>
        </>
    )
}

export default Comments;