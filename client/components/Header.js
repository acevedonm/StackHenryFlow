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

  return (
      <SafeAreaView style={styles.headerIn}>
        <TouchableOpacity>
          <Icon name="menu" color="#3b3b3b" size={0} />
        </TouchableOpacity>
        <Text style={styles.welcome}>{usuario.displayName}</Text>
        <Image
          source={require("../assets/henry.png")}
          resizeMode="contain"
          style={styles.imgHenry}
        ></Image>
        <TouchableOpacity
          style={{
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 20,
            alignSelf: "center" }}
          onPress={navigation.openDrawer} >
          <Icon name="menu" color="#3b3b3b" size={30} />
        </TouchableOpacity>
    </SafeAreaView>
  );
}
