import React from "react";
import { Formik } from "formik";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Text } from "react-native-paper";
import { GetUserLogin } from "../../database/controllers/controllerUsers";
import Header from "../../components/Header";
import DarkThemeContext from '../../DarkThemeContext'
import { yellow, black, white, errorRed, gray } from "../../styles/globalsVariables";

const ProfileEdit = (props) => {
  const { name, email, phone, cohorte } = props.route.params.myData;
  const isDarkMode = React.useContext(DarkThemeContext);

  const handleSubmit = (values) => {
    var user = GetUserLogin();
    console.log("usuariooo", user);
    user
      .updateProfile({
        displayName: values.name,
        email: values.email,
        cohorte: values.cohorte,
        phoneNumber: values.phone,
      })
      .then(() => {
        console.log("usuario cambiado", user);
      })
      .catch(function (error) {
        console.log("no se pudo actualizar los datos".error);
      });
    props.navigation.navigate("Profile");
  };

  return (
    <>
      <Header navigation={props.navigation} />
      <SafeAreaView style={!isDarkMode ? styles.container : styles.darkContainer}>
        <View style={styles.userInfoSection}>
          <Formik
            initialValues={{
              name,
              email,
              cohorte,
              phone,
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.form}>
                <Text style={!isDarkMode ? styles.textLabel : styles.darkTextLabel}>Nombre</Text>
                <TextInput
                  style={!isDarkMode ? styles.textInput : styles.darkTextInput}
                  placeholder="Nombre"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <Text style={styles.textLabel2}>Para ayudar a que las personas descubran tu cuenta, usa el nombre por el que te conoce la gente.</Text>

                <Text style={!isDarkMode ? styles.textLabel : styles.darkTextLabel}>Nombre de usuario</Text>
                <TextInput
                  style={!isDarkMode ? styles.textInput : styles.darkTextInput}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <Text style={styles.textLabel2}>Podrás volver a cambiar tu nombre de usuario.</Text>

                <Text style={!isDarkMode ? styles.textLabel : styles.darkTextLabel}>Cohorte</Text>
                <TextInput
                  style={!isDarkMode ? styles.textInput : styles.darkTextInput}
                  placeholder="Cohorte"
                  onChangeText={handleChange("cohorte")}
                  onBlur={handleBlur("cohorte")}
                  value={values.cohorte}
                />
                <Text style={styles.textLabel2}>Cohorte al que perteneces.</Text>

                <Text style={!isDarkMode ? styles.textLabel : styles.darkTextLabel}>Telefono</Text>
                <TextInput
                  style={!isDarkMode ? styles.textInput : styles.darkTextInput}
                  placeholder="Telefono - Opcional"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
                <View style={styles.containerBoton}>
                  <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                      Guardar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  darkContainer:{ 
    flex: 1,
    backgroundColor:`${black}`
  },
  containerBoton: {
    alignSelf: "center",
  },
  boton: {
    marginTop: 28,
    width: 180,
    height: 40,
    backgroundColor: "#FFFF01",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  form: {
    marginTop: 20,
  },
  textLabel: {
    color: `${black}`,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: "bold",
  },
  darkTextLabel:{
    color: `${yellow}`,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: "bold",

  },
  textInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${black}`,
    height: 30,
    width: "80%",
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
  },
  darkTextInput:{
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${yellow}`,
    height: 30,
    width: "80%",
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    color:gray

  },
  textLabel2 : {
    color: "#8e8e8e",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 10,
    marginTop: 0,
    marginBottom: 10,

  },
  textstyle:{
    color:`${white}`
  },
  darkTextStyle:{
    color:`${yellow}`
  }
});

export default ProfileEdit;
