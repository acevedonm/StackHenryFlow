import React, { useEffect, useState } from "react";
import { View, Text} from "react-native";
import SearchBar from "./SearchBar";
import { styles } from "../../styles/styles";
import NewPostForm from "../../components/NewPostForm";
import PostsList from "../../components/PostsList";
import Header from "../../components/Header";
import { GetUserLogin } from "../../../database/controllers/controllerUsers";

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
        <Text style={styles.h1}>Stack Henry Flow!</Text>
        <SearchBar />
        <NewPostForm user={user}/>
        <PostsList navigation={navigation}/>
      </View>
    </>
  );
};

export default Home;
