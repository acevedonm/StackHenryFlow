import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styles";
import {
  loginUser,
  loginWithGoogle,
} from "../../database/controllers/controllerUsers";
import BtnGoogle from "../../components/LoginWithGoogle";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
  const USER_LOGIN = "@user_login";

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
      <ScrollView>
        <View style={styles.body}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
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
                <Text style={styles.h1}>Inicia sesión</Text>

                {/* CAMPO USUARIO */}
                <Text style={styles.label}>Email</Text>
                <Input
                style={styles.input}
                style={{color:"black"}}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder='Email'
                />
                
                {/* ERROR EMAIL */}
                {touched.email && errors.email && (
                  <Text style={styles.errorForm}>{errors.email}</Text>
                )}

                {/* CAMPO CONTRASEÑA */}
                <Text style={styles.label}>Contraseña</Text>
                <Input
                  style={styles.input}
                  style={{color:"black"}}
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder='Contraseña'
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

                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={styles.linkForm}>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  <Text style={styles.linkForm}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
}
