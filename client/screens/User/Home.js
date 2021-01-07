import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { darkStyles } from "../../styles/darkStyles"
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
      <View style={!isDarkMode ? styles.body: darkStyles.darkBody}>
        <Text style={!isDarkMode ? styles.h1 : darkStyles.darkH1}>¡BIENVENIDO!</Text>
        <View style={!isDarkMode ? styles.card: darkStyles.darkCard}>
        <Text style={!isDarkMode ? styles.h3 : darkStyles.darkH3}>¿Cual va a ser tu rol hoy?</Text>
          <TouchableOpacity
            style={!isDarkMode ? styles.boton : darkStyles.darkBoton}
            onPress={() => navigation.navigate("NewPostForm")}
          >
            <Text style={{fontWeight: "bold" }}>Tengo una duda</Text>
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
