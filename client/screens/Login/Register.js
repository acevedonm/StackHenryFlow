import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { styles } from "../../styles/styles";
//importo el controller para comunicarme con la base de datos firebase
import ControllerUser from "../../../database/controllers/controllerUser";

export default function Register({ navigation }) {
  const validations = yup.object().shape({
    email: yup
      .string().email("Email no válido").required("Campo obligatorio"),
    password: yup
      .string()
      .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
      .required("Campo obligatorio"),
    repeatPassword: yup.string().required("Campo obligatorio"),
  });

  const handleRegister = (values, { resetForm }) => {
    ControllerUser.CreateUser(values)
    resetForm();
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require("../../assets/henry.png")}
          resizeMode="contain"
          style={styles.imgHenry}
        ></Image>
      </View>
      <View style={styles.body}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
          }}
          onSubmit={handleRegister}
          validationSchema={validations}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View style={styles.form}>
              <Text style={styles.h1}>REGISTRO</Text>

              {/* CAMPO EMAIL */}
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


              {/* CAMPO PASSWORD */}
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {/* ERROR PASSWORD */}
              {touched.password && errors.password && (
                <Text style={styles.errorForm}>{errors.password}</Text>
              )}

              {/* CAMPO REPEAT PASSWORD */}
              <Text style={styles.label}>Repite la Contraseña</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={handleChange("repeatPassword")}
                onBlur={handleBlur("repeatPassword")}
                value={values.repeatPassword}
              />
              {/* ERROR REPEAT PASSWORD */}
              {touched.repeatPassword && errors.repeatPassword && (
                <Text style={styles.errorForm}>{errors.repeatPassword}</Text>
              )}

              {/* REGISTRARSE */}
              <TouchableOpacity
                style={styles.boton}
                disabled={!isValid}
                onPress={handleSubmit}
              >
                <Text style={{ fontWeight: "bold" }}>Registrarme</Text>
              </TouchableOpacity>

              {/* INICIAR SESIÓN */}
              <TouchableOpacity
                style={styles.label}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.linkForm}>
                  Ya tenes cuenta? Inicia Sesion
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </>
  );
}
