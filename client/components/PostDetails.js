import React from "react";
import { View, Text } from "react-native";
import Comments from "./Comments";
import { styles } from "../styles/styles";
import Header from "./Header";

export default function PostDetails(props) {
  const { data } = props.route.params;

  return (
    <View>
      <Header navigation={props.navigation} />
      <Text style={styles.h1}>{data.title}</Text>
      <Text style={styles.body}>{data.description}</Text>
      <Comments />
    </View>
  );
}
