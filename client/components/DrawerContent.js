import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  DrawerNavigationItems,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import firebase from "firebase";
import "firebase/firestore";

export default function DrawerContent(props) {
  console.log('dddraweeeeeeee', props.isDarkMode)
  const USER_LOGIN = "@user_login";
  const inicialState = {
    displayName: "",
    email: "",
  };
  const [usuario, setUsuario] = useState(inicialState);
  const [photo, setPhoto] = useState("");

  const toggleTheme = () => {
    props.route?.params?.toggleTheme()
  };

  const logout = () => {
    AsyncStorage.removeItem(USER_LOGIN);
    props.navigation.navigate("Login");
  };

  const getUser = async () => {
    let storageUser = await AsyncStorage.getItem(USER_LOGIN);
    storageUser = JSON.parse(storageUser);
    console.log("StorageUser: ",storageUser )
    if (storageUser) {

        if(storageUser.user.photoURL){
          setPhoto(storageUser.user.photoURL)
        } 
      setUsuario({
        displayName: storageUser.user.displayName,
        email: storageUser.user.email,
      });
      //setPhoto(storageUser.user.photoURL);
    } else {
      console.log("Error al pedir user al storage");
    }
  };
  useEffect(() => {
    getUser();
  }, [photo]);

  return (
    
    <View style={{ flex: 1 }}>
      {console.log("lo que hay en photo: ", photo)}
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={ photo
                  ? {uri: photo}
                  : {
                      uri:
                        "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg",
                    }
              }
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                {usuario.displayName ?
                <Title>{usuario.displayName.length < 18 ? usuario.displayName : `${usuario.displayName.substring(0,18)}..`}</Title>
                : <Title>Bienvenido!</Title> }
                <Caption>{usuario.email}</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Inicio"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => {
                return (
                  <Icon name="account-outline" color={color} size={size} />
                );
              }}
              label="Perfil"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => {
                return (
                  <Icon name="plus-box-outline" color={color} size={size} />
                );
              }}
              label="Nuevo posteo"
              onPress={() => {
                props.navigation.navigate("NewPostForm");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => {
                return <Icon name="brain" color={color} size={size} />;
              }}
              label="Preguntas"
              onPress={() => {
                props.navigation.navigate("PostsList");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => {
                return <Icon name="post" color={color} size={size} />;
              }}
              label="Mis preguntas"
              onPress={() => {
                props.navigation.navigate("MyPosts");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Modo nocturno</Text>
                <View pointerEvents="none">
                  <Switch value={props.isDarkMode}></Switch>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => {
            return <Icon name="exit-to-app" color={color} size={size}></Icon>;
          }}
          label="Cerrar sesión"
          onPress={logout}
        ></DrawerItem>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
