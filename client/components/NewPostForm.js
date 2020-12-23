import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { styles } from "../styles/styles";
import { createPost } from "../../database/controllers/controllerPost";
import { getUserLogin } from "../functions/getUserLogin";

export default function NewPostForm() {
  const [user, setUser] = useState(null);

  const handlerPost = async (values) => {
    var posteo = await createPost(values);
    console.log(posteo);
  };

  useEffect(() => {
    getUserLogin().then((user) => setUser(user));
  }, []);

  return (
    <View style={styles.newpost}>
        
      <Formik
        initialValues={{ title: "", description: "", tag: "" }}
        onSubmit={handlerPost}
      >
        {(props) => (
          <View style={styles.form}>
            { user && 
            <Text style={{ color: "#FFF"}}>Hola {user.user.email} !</Text>
            }
            <Text style={{ color: "#FFF"}}>¿Tenés alguna duda?</Text>
            <TextInput
              placeholder="Haz tu pregunta"
              onChangeText={props.handleChange("title")} //update title
              value={props.values.title} //recibe valor de input
              style={styles.input}
            />
            <TextInput
              style={styles.inputdescription}
              multiline //Permite texto largo
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

            <TouchableOpacity style={styles.boton} onPress={props.handleSubmit}>
              <Text style={{ fontWeight: "bold" }}>Publicar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
