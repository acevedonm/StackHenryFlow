import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Title, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GetUserLogin } from "../../database/controllers/controllerUsers";
import Header from "../../components/Header";
import DarkThemeContext from '../../DarkThemeContext'
import { yellow, black, white, errorRed, gray } from "../../styles/globalsVariables";

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
    <View style ={!isDarkMode ? styles.container : styles.darkContainer}>
    <Header navigation={navigation} />
      <SafeAreaView style={!isDarkMode ? styles.body : styles.darkbody }>
        <View style ={!isDarkMode ? styles.container : styles.darkContainer}>
          <View style={!isDarkMode ? styles.userInfoSection : styles.darkUserInfoSection }>
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
          <View style={!isDarkMode ? styles.userInfoSection : styles.darkUserInfoSections}>
            <View style={!styles.row}>
              <Icon name="account" color="gray" size={20} />
              <Text style={{ color: "gray", marginLeft: 20 }}>
                {usuario.name}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="gray" size={20} />
              <Text style={{ color: "gray", marginLeft: 20 }}>
                {usuario.phone}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="gray" size={20} />
              <Text style={{ color: "gray", marginLeft: 20 }}>
                {usuario.email}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="book-open-outline" color="gray" size={20} />
              <Text style={{ color: "gray", marginLeft: 20 }}>
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
    </View>
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
  darkbody:{
    width: "95%",
    backgroundColor: `${black}`,
    borderRadius: 10,
    alignSelf: "center",
    paddingVertical: 20,
    marginVertical: 20,

  },
  container: {
    flex: 1,
    backgroundColor: `${white}`,
  },
  darkContainer: {
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
