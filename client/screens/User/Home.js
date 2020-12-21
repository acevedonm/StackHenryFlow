import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import SearchBar from "./SearchBar";
import { styles } from "../../styles/styles";
import NewPostForm from "../../components/NewPostForm";
import Post from "../../components/Posts";
import Header from "../../components/Header";
import { GetUserLogin } from "../../../database/controllers/controllerUser";

//Aca renderizamos SearchBar, Componente nuevo post y Componente post
const Home = ({ navigation }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    let isUser = GetUserLogin();
    setUser(isUser);
    if (user) {
      console.log("hay usuario");
    }
  }, []);
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <SearchBar />
        <Text style={styles.h1}>Stack Henry Flow!</Text>
        <NewPostForm />
        {/* <TouchableOpacity onPress={() => { navigation.navigate('NewPostForm') }}>
                <Text>Postear</Text>
            </TouchableOpacity> */}
        <Post />
      </View>
    </>
  );
};

export default Home;
