import React from "react";
import { View, Text, ScrollView } from "react-native";
import Comments from "../../components/Comments";
import { styles } from "../../styles/styles";
import Header from "../../components/Header";

export default function PostDetails(props) {
  const { data } = props.route.params;

  return (
    <>
      <Header navigation={props.navigation} />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.cardComment}>
            <Text style={styles.h3}>{data.title}</Text>
            <Text style={{ marginTop: 10}}>{data.description}</Text>
            <Text style={{ marginTop: 40}}>- - - - - - - - - - - - - - - - - - - - - -</Text>
            <Comments data={data} navigation={props.navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
