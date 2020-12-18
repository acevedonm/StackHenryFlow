import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { styles } from "../styles/styles";
import ControllerUser from "../../database/controllers/controlleruser";

export default function Login({ navigation }) {
  const validations = yup.object().shape({
    username: yup.string()
      .required("Campo obligatorio"),
    password: yup.string()
      .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
      .required("Campo obligatorio"),
  });

  const handleSubmit = (values) => {
    // ACA VA LA REDIRECCIÓN LUEGO DEL LOGIN
    console.log(values);
    ControllerUser.Login(values)
    navigation.navigate('Welcome');
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require("../assets/henry.png")}
          resizeMode="contain"
          style={styles.imgHenry}
        ></Image>
      </View>
      <View style={styles.body}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          {({
            handleChange,
            handleBlur, //Se usa al momento del error, relaciono error con el campo
            handleSubmit, 
            values,
            errors,
            touched,
            isValid,
            setFieldTouched,
          }) => (
            <View style={styles.form}>
              <Text style={styles.h1}>LOGIN</Text>

              {/* CAMPO USUARIO */}
              <Text style={styles.label}>Usuario</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />

              {/* ERROR USUARIO */}
              {touched.username && errors.username && (
                <Text style={styles.errorForm}>{errors.username}</Text>
              )}

              {/* CAMPO CONTRASEÑA */}
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />

              {/* ERROR CONTRASEÑA */}
              {touched.password && errors.password && (
                <Text style={styles.errorForm}>{errors.password}</Text>
              )}

              {/* BOTON INGRESAR */}
              <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                <Text style={{ fontWeight: "bold" }}>Ingresar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.linkForm}>Registrarse</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.linkForm}>Recuperar contraseña</Text>
              </TouchableOpacity>

              
            </View>
          )}
        </Formik>
      </View>
    </>
  );
}
