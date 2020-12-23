import React from "react";
import { View, Text, TextInput,TouchableOpacity} from "react-native";
import { Formik } from "formik";
import { styles } from "../styles/styles";
import { CreatePost } from '../../database/controllers/controllerPost'

export default function NewPostForm( {user} ){

    const handlerPost = async (values) => {
     var posteo = await CreatePost(values)
        console.log(posteo)
    }

    return(

        <View style={styles.newpost} >
            <Formik
            initialValues={{title: "", description: "",tag: ""}}
            onSubmit={handlerPost}
            >
                {(props) => (
                    <View style={styles.form}>
                        <Text style={styles.label}>Haz una publicación</Text>
                        <TextInput
                            
                            placeholder="Haz tu pregunta"
                            onChangeText={props.handleChange("title")} //update title
                            value={props.values.title}                 //recibe valor de input
                            style={styles.input}

                        />
                        <TextInput
                            style={styles.inputdescription}
                            multiline  //Permite texto largo
                            placeholder="Agregar una descripción"
                            onChangeText={props.handleChange("description")} 
                            value={props.values.description}                
                        />
                        <TextInput
                            style={styles.input}    
                            placeholder="Agregar etiqueta"
                            onChangeText={props.handleChange("tag")} 
                            value={props.values.tag}                
                        />
                        {/* <Button style={styles.boton} title="Publicar" onPress={props.handleSubmit} ></Button> */}

                        <TouchableOpacity style={styles.boton} onPress={props.handleSubmit}>
                          <Text style={{ fontWeight: "bold" }}>Publicar</Text>
                        </TouchableOpacity>
    

                    </View>
                )}  
            </Formik>
        </View>
    )
}
//Agregar etiquetas, foto 