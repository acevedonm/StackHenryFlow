import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { DrawerNavigationItems } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { yellow } from "../styles/globalsVariables";

export default function SideBar({ navigation }) {
  return (
    <ScrollView>
      <Image source={require("../assets/perfil.png")} styles={styles2.profile} ></Image>
    </ScrollView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "000",
  },
});
