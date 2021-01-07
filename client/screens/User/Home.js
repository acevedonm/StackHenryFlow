import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import Header from "../../components/Header";
import { GetUserLogin } from "../../database/controllers/controllerUsers";
import DarkThemeContext from '../../DarkThemeContext'


const Home = ({ navigation }) => {
  const isDarkMode = React.useContext(DarkThemeContext);
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
        <View style={styles.card}>
        <Text style={styles.h3}>¿Cual va a ser tu rol hoy?</Text>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => navigation.navigate("NewPostForm")}
          >
            <Text style={{ fontWeight: "bold" }}>Tengo una duda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => navigation.navigate("PostsList")}
          >
            <Text style={{ fontWeight: "bold" }}>Quiero ayudar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boton}
            // onPress={() => navigation.navigate("Videos")}
            onPress={() => navigation.navigate("Videos")}

          >
            <Text style={{ fontWeight: "bold" }}>Vine a buscar material</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
