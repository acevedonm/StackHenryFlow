import React from "react";
import { View, Text } from "react-native";
import Comments from "../../components/Comments";
import { styles } from "../../styles/styles";
import Header from "../../components/Header";

export default function PostDetails(props) {
  const { data } = props.route.params;

  return (
    <View>
      <Header navigation={props.navigation} />
      <View style={styles.body}>
        <Text style={styles.h2}>{data.title}</Text>
        <View style={styles.cardComment}>
          <Text>{data.description}</Text>
          <Comments data={data} navigation={props.navigation} />
        </View>
      </View>
    </View>
  );
}