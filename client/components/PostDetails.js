import React, { useEffect, useState } from "react";
import { Button, View, Text, TextInput} from "react-native";
import Comments from "./Comments";
import {GetPost} from "../../database/controllers/controllerPost";
import { styles } from "../styles/styles";

//Aca renderizo Componente POST (Aye) y Componente comentario de POST(Lalo)

export default function PostDetails(){
    const info = [
        {id:1, pregunta:"Queres ser programador?",description:"Estudia en Henry"},
        {id:2, pregunta:"¿Qué es Redux y para qué sirve?", description:"Redux es un patrón de arquitectura de datos que permite manejar el estado de la aplicación de una manera predecible. Está pensado para reducir el número de relaciones entre componentes de la aplicación y mantener un flujo de datos sencillo"}]

    const [post, setPost] = useState([])

    useEffect(() => {
        obtenerDatos()
        // GetPost(3)
    }, [])
    
    const obtenerDatos = (() => {
        console.log("Este es el post")
        setPost(info) 
    })


    return(     
        <View >
            <Text style={styles.h1}>ESTO ES UN POSTEO</Text>
             <Text style={styles.body}>{info[1].pregunta}</Text>
             <Text style={styles.body}>{info[1].description}</Text>

             <Comments />
        </View>
    )
}

