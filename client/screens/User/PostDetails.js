import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Comments from "../../components/Comments";
import { styles } from "../../styles/styles";
import Header from "../../components/Header";
import { GetComments} from "../../database/controllers/controllerPost"
import DarkThemeContext from '../../DarkThemeContext'

export default function PostDetails(props) {
  const isDarkMode = React.useContext(DarkThemeContext);
  const { data } = props.route.params;

  const [comments, setComments] = useState([])

  useEffect(() => {
    GetComments(data.id).then((respuesta)=> setComments(respuesta.docs))
  },[])
  return (
    <>
      <Header navigation={props.navigation} />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.cardComment}>
            <Text style={[styles.h5, { alignSelf: "flex-start" }]}>
              {data.title}
            </Text>
            <Text style={[ styles.postTag, { alignSelf: "flex-start", fontSize: 12 } ]}>
              {data.tag}
            </Text>
            <Text
              style={{
                marginTop: 25,
                fontSize: 15,
                alignSelf: "flex-start",
                marginLeft: 2,
              }}
            >
              {data.description}
            </Text>
            <Text style={{ marginTop: 40, alignSelf: "flex-start" }}>{data.fecha}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 15,
                borderBottomWidth: 1,
                borderTopWidth: 1,
                paddingVertical: 15,
                width: "90%",
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
            <Comments data={data} comments={comments} navigation={props.navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
