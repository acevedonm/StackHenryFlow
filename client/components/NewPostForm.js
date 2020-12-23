import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { styles } from "../styles/styles";
import { createPost } from "../../database/controllers/controllerPost";
import { getUserLogin } from "../functions/getUserLogin";

export default function NewPostForm() {
  const [user, setUser] = useState(null);

  const handlerPost = async (values, { resetForm }) => {
    values = { ...values, user: user };
    var posteo = await createPost(values);
    posteo && console.log(posteo);
    resetForm();
  };

  useEffect(() => {
    getUserLogin().then((user) => setUser(user.user));
  }, [user]);

  return (
    <View style={styles.newpost}>
      <Formik
        initialValues={{ title: "", description: "", tags: "" }}
        onSubmit={handlerPost}
      >
        {({ values, handleChange, handleSubmit }) => (
          <View style={styles.form}>
            {user && <Text style={{ color: "#FFF" }}>Hola {user.email} !</Text>}
            <Text style={{ color: "#FFF" }}>¿Tenés alguna duda?</Text>

            <TextInput
              placeholder="Haz tu pregunta"
              onChangeText={handleChange("title")} //update title
              value={values.title} //recibe valor de input
              style={styles.input}
            />
            <TextInput
              style={styles.inputdescription}
              multiline //Permite texto largo
              placeholder="Agregar una descripción"
              onChangeText={handleChange("description")}
              value={values.description}
            />
            <TextInput
              style={styles.input}
              placeholder="Agregar etiqueta"
              onChangeText={handleChange("tags")}
              value={values.tags}
            />

            <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
              <Text style={{ fontWeight: "bold" }}>Publicar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
