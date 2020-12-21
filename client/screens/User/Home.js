import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import SearchBar from "./SearchBar";
import { styles } from "../../styles/styles";
import NewPostForm from "../../components/NewPostForm";
import PostsList from "../../components/PostsList";
import Header from "../../components/Header";
import { GetUserLogin } from "../../../database/controllers/controllerUsers";

//Aca renderizamos SearchBar, Componente nuevo post y Componente post
const Home = ({ navigation }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let isUser = GetUserLogin();
    setUser(isUser)
    if (user) {
      console.log(user);
    }
  }, []);
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <SearchBar />
        <Text style={styles.h1}>Stack Henry Flow!</Text>
        <NewPostForm user={user}/>
        <PostsList />
      </View>
    </>
  );
};

export default Home;
