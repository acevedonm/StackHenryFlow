import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
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
            <Text style={styles.h5}>{data.title}</Text>
            <Text style={[styles.postTag, {alignSelf: "flex-start", fontSize: 12}]}>{data.tag}</Text>
            <Text style={{ marginTop: 25, fontSize:15, textAlign: "left", marginLeft: 2 }}>{data.description}</Text>
            <Text style={{ marginTop: 40 }}>
              Realizado el 26/12 a las 21:26hs por:
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                borderBottomWidth: 1,
                borderTopWidth: 1,
                paddingVertical: 15,
              }}
            >
              <Image
                source={
                  data.photo
                    ? { uri: data.photo }
                    : require("../../assets/perfil.png")
                }
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  marginRight: 10,
                }}
              />
              <View style={{ textAlign: "left" }}>
                <Text style={{ fontWeight: "bold" }}>{data.name}</Text>
                <Text>{data.email}</Text>
              </View>
            </View>
            <Comments data={data} navigation={props.navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
