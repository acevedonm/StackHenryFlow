import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={navigation.openDrawer}
          >
              <Text>abrir</Text>
          </TouchableOpacity>
          
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.text}>Screen</Text>
          </View>
        </SafeAreaView>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500",
  },
});
