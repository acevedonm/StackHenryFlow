import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import { Formik } from "formik";
import { styles } from "../../styles/styles";
import Header from "../../components/Header";
import { createPost } from "../../../database/controllers/controllerPost";
import { getUserLogin } from "../../functions/getUserLogin";

export default function NewPostForm({ navigation }) {
  const [user, setUser] = useState(null);

  const handlerPost = async (values, { resetForm }) => {
    values = { ...values, user: user };
    let posteo = await createPost(values);
    posteo && console.log(posteo);
    resetForm();
    navigation.navigate('PostsList')
  };

  useEffect(() => {
    getUserLogin().then((user) => user && setUser(user.user));
  }, [user]);

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <Formik
          initialValues={{ title: "", description: "", tag: "Modulo 1" }}
          onSubmit={handlerPost}
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <View style={styles.formNewPost}>
              {user && (
                <Text style={{ color: "#000", fontWeight: "bold" }}>
                  Hola {user.email} !
                </Text>
              )}
              <Text
                style={{ color: "#000", marginBottom: 20, fontWeight: "bold" }}
              >
                ¿Tenés alguna duda?
              </Text>

              <TextInput
                placeholder="Haz tu pregunta"
                onChangeText={handleChange("title")} //update title
                value={values.title} //recibe valor de input
                style={styles.inputNewPost}
              />
              <TextInput
                style={styles.inputDescription}
                multiline //Permite texto largo
                placeholder="Agregar una descripción"
                onChangeText={handleChange("description")}
                value={values.description}
              />
              <Text>¿A qué modulo pertenece tu duda?</Text>
              <Picker
                style={styles.inputNewPost}
                onValueChange={(itemValue) => setFieldValue("tag", itemValue)}
              >
                <Picker.Item label="Modulo 1" value="Modulo 1" key={1} />
                <Picker.Item label="Modulo 2" value="Modulo 2" key={2} />
                <Picker.Item label="Modulo 3" value="Modulo 3" key={3} />
                <Picker.Item label="Modulo 4" value="Modulo 4" key={4} />
                <Picker.Item label="E-Commerce" value="E-Commerce" key={5} />
                <Picker.Item label="Proyecto Final" value="Proyecto Final" key={6}/>
              </Picker>

              <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                <Text style={{ fontWeight: "bold" }}>Publicar</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </>
  );
}
