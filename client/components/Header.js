import React from "react";
import { styles } from "../styles/styles";
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({ navigation }) {
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            backgroundColor: "#FFF",
            paddingVertical: 10,
            paddingHorizontal: 20,
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
