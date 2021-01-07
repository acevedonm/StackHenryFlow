import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Avatar, Title, Text } from "react-native-paper";
import { GetUserLogin,updateUser } from "../../database/controllers/controllerUsers";
import Header from "../../components/Header";
import UserPermissions from "../../utilities/userPermissions"
import * as ImagePicker from "expo-image-picker"


const ProfileEdit = (props) => {
  const { name, email, phoneNumber, cohorte } = props.route.params.myData;
  const [photo, setPhoto] = useState("");


  const handleSubmit = (values) => {
    var user = GetUserLogin();
    console.log("usuariooo", user);
    updateUser({
        displayName: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        photoURL: photo
      })
      .then(() => {
        console.log("usuario cambiado", user);
      })
      .catch(function (error) {
        console.log("no se pudo actualizar los datos".error);
      });
    props.navigation.navigate("Profile");
  };

  const handlerPickAvatar = async () =>{
    UserPermissions.getCameraPermission()
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowEditing: true,
      aspect: [4,3]
    })

    if(!result.cancelled){
      setPhoto(result.uri) 
    }
  } 


  useEffect(() => {
    var user = GetUserLogin();
    if (user) {
      if(user.photoURL){
        setPhoto(user.photoURL)
      } 
    } else {
      console.log("No se encontró usuario");
    }
  }, [photo]);

  return (
    <>
      <Header navigation={props.navigation} />
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <Formik
            initialValues={{
              name,
              email,
              cohorte,
              phoneNumber
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.form}>
            <TouchableOpacity onPress={handlerPickAvatar}>
              <Avatar.Image
                size={150}
                source={
                  photo
                    ? {uri: photo}
                    : {
                        uri:
                          "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg",
                      }
                }
              />
              </TouchableOpacity>
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
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
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
                  value={values.phoneNumber}
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
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ProfileEdit;
