import React from "react"
import {StyleSheet, View, TextInput, Button, Alert } from "react-native"
import Header from "../components/Header"

//Esto se tiene que renderizar en la pantalla postDetail
const   Comments = ( {navigation} )=>{

    /* const createAlert = () =>
    Alert.alert(
      "Listo!",
      "Comentario posteado",
      { cancelable: false }
    ); */
    
    return (
        <>
        <Header navigation={navigation} />
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
const styles= StyleSheet.create({
    containerInput:{
        borderRadius:10,
        borderColor:'yellow',
        backgroundColor:'black',
        padding:8,
        margin:10,
        widh:200,
        height:100,
        color:'white'

    },
    comment:{
        padding:8,
        margin:10,
        widh:200,
        height:100,
        color:'white'
    },
    
    
})


export default Comments;