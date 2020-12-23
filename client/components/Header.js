import React, { useState, useEffect } from "react";
import { styles } from "../styles/styles";
import { Avatar } from "react-native-paper";
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GetUserLogin } from "../../database/controllers/controllerUsers";

export default function Header({ navigation }) {
  const USER_LOGIN = "@user_login";
  const inicialState = {
    displayName: "",
    email: "",
  };
  const [usuario, setUsuario] = useState(inicialState);
  const [photo, setPhoto] = useState("");


  const logout = () => {
    AsyncStorage.removeItem(USER_LOGIN);
    navigation.navigate("Login");
  };


  const handlerValor = async () => {
    let storageUser = await AsyncStorage.getItem(USER_LOGIN);
    storageUser = JSON.parse(storageUser);
    console.log(storageUser)
    if (storageUser) {
      setUsuario({
        displayName: storageUser.user.displayName,
        email: storageUser.user.email,
      });
      setPhoto(storageUser.user.photoURL);
    } else {
      console.log("Error al pedir user al storage");
    }
   }
  useEffect( () => { 
    handlerValor();
  }, []);

  
  /* useEffect(() => {
    let user = GetUserLogin();
    setUsuario({
      email: user.email,
      // name: user.username,
      // username: user.displayName,
      // photoUrl: user.photoUrl,
      // phone: user.phone,
    });
  }, []); */


  return (
    <View>
      <SafeAreaView
        style={{
          backgroundColor: "#FFF",
          display: "flex",
        }}
      >
        <TouchableOpacity
          style={{
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onPress={navigation.openDrawer}
        >
         

          <Avatar.Image
            size={80}
            source={
              photo
                ? photo
                : "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg"
            }
          />
          <Text style={styles.welcome}>{usuario.displayName}</Text>
          <Text onPress={logout}>cerrar sesion</Text>
          <Icon name="menu" color="#3b3b3b" size={30} />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.headerIn}>
        <Image
          source={require("../assets/henry.png")}
          resizeMode="contain"
          style={styles.imgHenry}
        ></Image>
      </View>
    </View>
  );
}
