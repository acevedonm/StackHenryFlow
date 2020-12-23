import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GetPosts } from "../../database/controllers/controllerPost";
import { styles } from "../styles/styles"

export default function Posts({ navigation }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetPosts()
      .then( posts => { setPosts(posts.docs.map( doc => ( { id: doc.id, ...doc.data() })))})
      .catch( err => { console.log("Error getting posts", err) });
  }, []);

  return (
    <View>
      <Text style={styles.h1}>Ultimas entradas</Text>
      {posts &&
        posts.map((e) => (
          <View key={e.id}>
            <Text onPress={() =>  navigation.navigate('PostDetails', { data : e})}> {e.title} </Text>
            <Text>{e.tag}</Text>
          </View>
        ))}
    </View>
  );
}
