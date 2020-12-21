import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Title, Caption, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GetUserLogin } from "../../../database/controllers/controllerUsers";
import Header from "../../components/Header";

const Profile = ({ route, navigation }) => {
  var initialState = {
    username: "",
    name: "",
    email: "",
    password: "",
    phone: "+54 123456789",
    photoUrl:
      "data:image/jpeg;base64,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",
  };
  const [usuario, setUsuario] = useState(initialState);

  const handleProfileEdit = () => {
    // navigation.navigate('ProfileEdit',{
    //    myData: usuario
    // })
  };

  useEffect(() => {
    var user = GetUserLogin();

    if (user) {
      setUsuario({
        username: user.displayName,
        email: user.email,
        name: user.username,
        photoUrl: user.photoUrl,
        phone: user.phone,
      });
    } else {
      console.log("no hay nada");
    }
  }, []);
  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image size={80} source={usuario.photoUrl} />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                {usuario.username}
              </Title>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="account" color="#3b3b3b" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {usuario.name}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#3b3b3b" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {usuario.phone}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#3b3b3b" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {usuario.email}
            </Text>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <TouchableOpacity style={styles.btn} onPress={handleProfileEdit}>
            <View style={styles.row}>
              <Icon
                name="account-edit"
                style={{ color: "#000000" }}
                size={20}
              />
              <Text
                style={{ marginLeft: 20, color: "#000000", fontWeight: "bold" }}
              >
                Editar Perfil
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#FFFF01",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  userNavigation: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  form: {
    marginTop: 20,
  },
  textLabel: {
    color: "#777777",
    marginBottom: 5,
    marginTop: 5,
  },
  textInput: {
    border: "1px solid #BBD2C5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default Profile;
