import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import Header from "../../components/Header";
import { GetUserLogin } from "../../../database/controllers/controllerUsers";

const Home = ({ navigation }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let isUser = GetUserLogin();
    setUser(isUser);
  }, [user]);
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <Text style={styles.h1}>¡BIENVENIDO!</Text>
        <Text style={styles.h3}>¿CUAL VA A SER TU ROL HOY?</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => navigation.navigate("NewPostForm")}
          >
            <Text style={{ fontWeight: "bold" }}>Necesito ayuda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => navigation.navigate("PostsList")}
          >
            <Text style={{ fontWeight: "bold" }}>Quiero ayudar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
