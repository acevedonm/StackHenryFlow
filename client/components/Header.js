import React, { useState, useEffect } from "react";
import { styles } from "../styles/styles";
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
            alignItems: "center"
          }}
          onPress={navigation.openDrawer}
        >
         
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
