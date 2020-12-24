import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GetPosts } from "../../../database/controllers/controllerPost";
import { styles } from "../../styles/styles";
// COMPONENTS //
import Header from "../../components/Header";
import SearchBar from "./SearchBar";

export default function Posts({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetPosts()
      .then((posts) => {
        setPosts(posts.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => {
        console.log("Error getting posts", err);
      });
  }, []);

  return (
    <>
      <Header navigation={navigation} />
      <View>
        <SearchBar />
        <Text style={styles.h3}>ULTIMAS ENTRADAS</Text>
        {posts &&
          posts.map((e) => (
            <View key={e.id}>
              <Text
                style={styles.postList}
                onPress={() => navigation.navigate("PostDetails", { data: e })}
              >
                {" "}
                {e.title}{" "}
              </Text>
              <Text>{e.tag}</Text>
            </View>
          ))}
      </View>
    </>
  );
}
