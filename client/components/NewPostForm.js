import React from "react";
import { Button, View, Text, TextInput} from "react-native";
import { Formik } from "formik";
import { styles } from "../styles/styles";
import ControllerPost from '../../database/controllers/controllerPost'

export default function NewPostForm(){

    const handlerPost = async (values) => {
     var posteo= await ControllerPost.CreatePost(values)
        console.log(posteo)
    }

    return(
        <View >
            <Formik
            initialValues={{title: "", description: "",tag: ""}}
            onSubmit={handlerPost}
            >
                {(props) => (
                    <View>
                        <TextInput
                            placeholder="Haz tu pregunta"
                            onChangeText={props.handleChange("title")} //update title
                            value={props.values.title}                 //recibe valor de input

                        />
                        <TextInput
                            multiline  //Permite texto largo
                            placeholder="Agregar una descripción"
                            onChangeText={props.handleChange("description")} 
                            value={props.values.description}                
                        />
                        <TextInput
                            placeholder="Agregar etiqueta"
                            onChangeText={props.handleChange("tag")} 
                            value={props.values.tag}                
                        />
                        <Button title="Publicar" onPress={props.handleSubmit}></Button>
                    </View>
                )}  
            </Formik>
        </View>
    )
}
//Agregar etiquetas, foto 