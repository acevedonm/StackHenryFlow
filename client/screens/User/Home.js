import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../../styles/styles";

import Header from "../../components/Header";
import { GetUserLogin } from "../../../database/controllers/controllerUsers";

const Home = ({ navigation }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let isUser = GetUserLogin();
    setUser(isUser);
    if (user) {
      console.log(user);
    }
  }, []);
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <Text style={styles.h3}>¿Cual es tu rol hoy?</Text>
        <Text
          style={styles.textBody}
          onPress={() => navigation.navigate("PostsList")}
        >
          Quiero ayudar
        </Text>
        <Text style={styles.textBody} onPress={() => navigation.navigate("NewPostForm")}>
          Necesito ayuda
        </Text>
      </View>
    </>
  );
};

export default Home;
