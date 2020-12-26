import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { GetPosts } from "../../../database/controllers/controllerPost";
import { styles } from "../../styles/styles";
// COMPONENTS //
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

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
  }, [posts]);

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
      <View style={styles.body}>
        <SearchBar />
        <View style={styles.cardPostList}>
        <Text style={styles.h3}>ULTIMAS ENTRADAS</Text>
          {posts &&
            posts.map((post) => (
              <View
                key={post.id}
                style={styles.post}
              >
                <Text
                  style={styles.postList}
                  onPress={() =>
                    navigation.navigate("PostDetails", { data: post })
                  }
                >
                  {post.title.length > 20 ? `${post.title.substring(0,20)}...` : post.title}
                </Text>
                <Text style={styles.postTag}>{post.tag}</Text>
              </View>
            ))}
        </View>
      </View>
      </ScrollView>
    </>
  );
}
