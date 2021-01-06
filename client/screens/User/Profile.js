import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Title, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GetUserLogin } from "../../database/controllers/controllerUsers";
import Header from "../../components/Header";
import DarkThemeContext from '../../DarkThemeContext'

const Profile = ({ navigation }) => {
  const isDarkMode = React.useContext(DarkThemeContext);

  var initialState = {
    name: "",
    email: "",
    cohorte: "",
    password: "",
    phone: "",
  };
  const [usuario, setUsuario] = useState(initialState);
  const [photo, setPhoto] = useState("");
  const handleProfileEdit = () => {
    navigation.navigate("ProfileEdit", {
      myData: usuario,
    });
  };

  useEffect(() => { 
    var user = GetUserLogin();

    if (user) {
      setUsuario({
        email: user.email,
        name: user.displayName,
        cohorte: user.cohorte,
        phoneNumber: user.phone,
      });
      setPhoto(user.photoURL);
    } else {
      console.log("No se encontró usuario");
    }
  }, [photo]);
  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView style={isDarkMode ? styles.containerDark : styles.container}>
        <View style={styles.body}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "column",
                marginTop: 15,
                alignItems: "center",
              }}
            >
              <Avatar.Image
                size={150}
                source={
                  photo
                    ? photo
                    : {
                        uri:
                          "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg",
                      }
                }
              />
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="account" color="#3b3b3b" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {usuario.name}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#3b3b3b" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {usuario.phone}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#3b3b3b" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {usuario.email}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="book-open-outline" color="#3b3b3b" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {usuario.cohorte}
              </Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <TouchableOpacity style={styles.btn} onPress={handleProfileEdit}>
              <View style={styles.row}>
                <Icon
                  name="account-edit"
                  style={{ color: "#000000" }}
                  size={20}
                />
                <Text
                  style={{
                    marginLeft: 20,
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                >
                  Editar Perfil
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "95%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignSelf: "center",
    paddingVertical: 20,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#000",
  },
  btn: {
    backgroundColor: "#FFFF01",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  userNavigation: {
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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

export default Profile;
