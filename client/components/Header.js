import React, { useState, useEffect } from "react";
import { styles } from "../styles/styles";
import { Avatar} from "react-native-paper";
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GetUserLogin } from "../../database/controllers/controllerUsers";

export default function Header({ navigation }) {
  const USER_LOGIN= '@user_login'
  const [usuario, setUsuario] = useState({});
  const [photo, setPhoto] = useState("");

  const logout = () => {
    AsyncStorage.removeItem(USER_LOGIN)
    navigation.navigate('Login')
  }

  /* useEffect(() => {
    let user = GetUserLogin();
    setUsuario({
      displayName: user.displayName,
      // name: user.username,
      // username: user.displayName,
      // photoUrl: user.photoUrl,
      // phone: user.phone,
    });
<<<<<<< HEAD
    setPhoto(user.photoURL)
  }, [photo]);
=======
  }, []); */
>>>>>>> b560aa2216b5f06e8dfdd50f8555a0e0776b69db

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
            alignItems: "center"
          }}
          onPress={navigation.openDrawer}
        >
<<<<<<< HEAD
          <Avatar.Image size={80} source={photo ? photo :"https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg" } />
          <Text style={styles.welcome}>{usuario.displayName}</Text>
=======
         <Text  onPress={logout}>cerrar sesion</Text> 
>>>>>>> b560aa2216b5f06e8dfdd50f8555a0e0776b69db
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
