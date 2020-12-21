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
import { GetUserLogin } from "../../../database/controllers/controllerUsers";
import Header from "../../components/Header";

const ProfileEdit = (props, { navigation }) => {
  const { username, name, email, phone, cohorte } = props.route.params.myData;

  const handleSubmit = (values) => {
    var user = GetUserLogin();
    console.log("usuariooo", user);
    user
      .updateProfile({
        displayName: values.username,
        email: values.email,
        name: values.name,
        phone: values.phone,
      })
      .then(() => {
        console.log("usuario cambiado", user);
      })
      .catch(function (error) {
        console.log("no se pudo actualizar los datos".error);
      });
    navigation.navigate("Profile");
  };

  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <Formik
            initialValues={{
              name,
              username,
              cohorte,
              phone,
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.form}>
                <Text style={styles.textLabel}>Nombre completo</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nombre"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />

                <Text style={styles.textLabel}>Usuario</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nombre de Usuario"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
                <Text style={styles.textLabel}>Cohorte</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Cohorte"
                  onChangeText={handleChange("cohorte")}
                  onBlur={handleBlur("cohorte")}
                  value={values.cohorte}
                />
                <Text style={styles.textLabel}>Telefono</Text>
                <TextInput
                  style={styles.textInput}
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
  containerBoton: {
    alignSelf: "center",
  },
  boton: {
    marginTop: 10,
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
    color: "#777777",
    marginBottom: 5,
    marginTop: 5,
  },
  textInput: {
    border: "1px solid #BBD2C5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ProfileEdit;
