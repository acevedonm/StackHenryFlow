import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert  } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { styles } from "../styles/styles";
import ControllerUser from "../../database/controllers/controlleruser";


export default function Login({ navigation }) {
  const validations = yup.object().shape({
    email: yup.string()
      .required("Campo obligatorio"),
    password: yup.string()
      .required("Campo obligatorio"),
  });

  const handleSubmit = (values) => {
    // ACA VA LA REDIRECCIÓN LUEGO DEL LOGIN
    ControllerUser.Login(values)
    .then((user) => {
      console.log("Estas Loggeado");
      console.log(user);
      if (user !=null) {
        navigation.navigate('Welcome');
      } else {
        alert("Error de Logueo")
      }
    })
    .catch((error) => {
      console.log("No fue posible Loggearte");
      console.log(error);
      alert("Error de Logueo")

    });
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
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              {/* ERROR EMAIL */}
              {touched.email && errors.email && (
                <Text style={styles.errorForm}>{errors.email}</Text>
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
