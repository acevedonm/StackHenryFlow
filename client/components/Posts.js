import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ListItem } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { GetPosts } from "../../database/controllers/controllerPost";

export default function Posts({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetPosts().then((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <View>
      {posts &&
        posts.map((e) => (
          <View key={e.id}>
            <Text>{e.title}</Text>
            <Text>{e.tag}</Text>
          </View>
        ))}
    </View>
  );
}
