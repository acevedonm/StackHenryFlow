import React from "react";
import { darkStyles } from "../styles/darkStyles"
import { styles } from "../styles/styles";
import { Image, SafeAreaView, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DarkThemeContext from '../DarkThemeContext'


export default function Header({ navigation }) {
  const isDarkMode = React.useContext(DarkThemeContext);
  return (
      <SafeAreaView style={!isDarkMode ? styles.header : darkStyles.darkHeader}>
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
          source={!isDarkMode ? require("../assets/henry3.png") : require("../assets/henry.png")}
          resizeMode="contain"
          style={!isDarkMode ? styles.imgHenry : darkStyles.darkImgHenry}
        ></Image>
        
        <TouchableOpacity>
          <Icon name="menu" color="#3b3b3b" size={0} />
        </TouchableOpacity>
    </SafeAreaView>
  );
}
