import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const GoogleButton = ({ login }) => {
  return (
    <TouchableOpacity onPress={() => login()} style={styles.googleBtn}>
      <View style={styles.googleIconWrapper}>
        <Image
          style={styles.googleIcon}
          source="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
        <Text style={styles.btnText}> Ingresar con Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  googleBtn: {
    width: "80%",
    height: 30,
    backgroundColor: "#FFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginBottom: 20,
  },
  googleIconWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
    marginLeft: 1,
    borderRadius: 2,
    backgroundColor: "FFF",
  },
  googleIcon: {
    width: 18,
    height: 18,
  },
  btnText: {
    fontWeight: "bold",
    marginLeft: 5,
    color: "#000",
    fontSize: 14,
    letterSpacing: 0.2,
  },
});
