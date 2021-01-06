import React from "react";
import { styles } from "../styles/styles";
import { Image, SafeAreaView, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header({ navigation }) {

  return (
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingHorizontal: 20,
            alignSelf: "center" }}
          onPress={navigation.openDrawer} >
          <Icon name="menu" color="#3b3b3b" size={30} />
        </TouchableOpacity>
        <Image
          source={require("../assets/henry3.png")}
          resizeMode="contain"
          style={styles.imgHenry}
        ></Image>
        <TouchableOpacity>
          <Icon name="menu" color="#3b3b3b" size={0} />
        </TouchableOpacity>
    </SafeAreaView>
  );
}
