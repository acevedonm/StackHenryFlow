import React, { useEffect } from "react";
// NAVIGATION //
import { createDrawerNavigator } from "@react-navigation/drawer";
// COMPONENTS //
import Home from "../User/Home";
import Profile from "../User/Profile"
import Comments from "../../components/Comments"
import DrawerContent from "../../components/DrawerContent";
import ProfileEdit from "../User/ProfileEdit"
import PostsList from "../../components/PostsList"
import PostDetails from "../../components/PostDetails"
import AsyncStorage from '@react-native-async-storage/async-storage';
const USER_LOGIN= '@user_login'

const Drawer = createDrawerNavigator();

function LogOut({navigation}) {
  useEffect(() => {
    AsyncStorage.removeItem(USER_LOGIN)
    navigation.navigate('Login')

  },[])
  return null;
}

export default function Index({ navigation }) {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <DrawerContent {...props} />}
    > 
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      {/* <Drawer.Screen name="Comments" component={Comments} />
      <Drawer.Screen name="PostsList" component={PostsList} />*/}
      <Drawer.Screen name="PostDetails" component={PostDetails} /> 
      <Drawer.Screen name="Sign out" component={LogOut} />
      {/* <Drawer.Screen name="ProfileEdit" component={ProfileEdit} /> */}
    </Drawer.Navigator>
  );
}
