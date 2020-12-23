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
  };
  const [usuario, setUsuario] = useState(initialState);
  const [photo, setPhoto] = useState("");
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
        phone: user.phone,
      });
      setPhoto(user.photoURL)
    } else {
      console.log("no hay nada");
    }
  }, [photo]);
  return (
    <>
   
      <Header navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image size={80} source={photo ? photo :"https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg" } />
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
