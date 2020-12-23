import React,{ useState, useEffect } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from "react-native-paper"
import { DrawerNavigationItems, DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { yellow } from "../styles/globalsVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";






export default function DrawerContent(props) {

  const USER_LOGIN = "@user_login";
  const inicialState = {
    displayName: "",
    email: "",
  };
  const [usuario, setUsuario] = useState(inicialState);
  const [photo, setPhoto] = useState("");

  const logout = () => {
    AsyncStorage.removeItem(USER_LOGIN);
    navigation.navigate("Login");
  };


  const handlerValor = async () => {
    let storageUser = await AsyncStorage.getItem(USER_LOGIN);
    storageUser = JSON.parse(storageUser);
    console.log(storageUser)
    if (storageUser) {
      setUsuario({
        displayName: storageUser.user.displayName,
        email: storageUser.user.email,
      });
      setPhoto(storageUser.user.photoURL);
    } else {
      console.log("Error al pedir user al storage");
    }
   }
  useEffect( () => { 
    handlerValor();
  }, []);


  return (
   
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View>
            <Avatar.Image 
            source={{uri: photo
              ? photo
              : "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg"
          }}
            size={50}/>
            <View>
              <Title>{usuario.displayName}</Title>
              <Caption>{usuario.email}</Caption>
            </View>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
      <DrawerItem icon={(color,size)=>{
        <Icon name="exit-to-app"
        color={color}
        size={size}></Icon>
      }} label="Sign Out"
      onPress={logout}></DrawerItem>
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
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
