import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styles";
import {
  loginUser,
  loginWithGoogle,
} from "../../../database/controllers/controllerUsers";
import BtnGoogle from "../../components/LoginWithGoogle";

export default function Login({ navigation }) {
  const USER_LOGIN = "@user_login";

  const validations = yup.object().shape({
    email: yup.string().required("Campo obligatorio"),
    password: yup.string().required("Campo obligatorio"),
  });

  const handleSubmit = (values) => {
    loginUser(values)
      .then((user) => {
        AsyncStorage.setItem(USER_LOGIN, JSON.stringify(user));
        navigation.navigate("Index");
      })
      .catch((error) => {
        console.log(error);
        console.log("No fue posible Loggearte");
      });
  };
  const handlerloginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
        navigation.navigate("Index");

        AsyncStorage.setItem(USER_LOGIN, JSON.stringify(result));
      })
      .catch(function (error) {
        // Handle Errors.
        alert(error.message);
        console.log(error);
        console.log("credential: ", error.credential);
      });
  };

  return (
    <>
      <View style={styles.headerOut}>
        <Image
          source={require("../../assets/henry.png")}
          resizeMode="contain"
          style={styles.imgHenryOut}
        ></Image>
      </View>
      <View style={styles.body}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
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

              <BtnGoogle login={handlerloginWithGoogle} />

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
