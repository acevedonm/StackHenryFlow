import React, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
// NAVIGATION //
import { createDrawerNavigator } from "@react-navigation/drawer";
// COMPONENTS //
import Home from "../User/Home";
import Profile from "../User/Profile"
import Comments from "../../components/Comments"
import DrawerContent from "../../components/DrawerContent";
import ProfileEdit from "../User/ProfileEdit"
import PostsList from "../User/PostsList"
import PostDetails from "../User/PostDetails"
import NewPostForm from "../User/NewPostForm";
import MyPosts from "../User/MyPosts"

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
      <Drawer.Screen name="PostsList" component={PostsList} />
      <Drawer.Screen name="MyPosts" component={MyPosts} />
      <Drawer.Screen name="PostDetails" component={PostDetails} /> 
      <Drawer.Screen name="ProfileEdit" component={ProfileEdit} />
      <Drawer.Screen name="NewPostForm" component={NewPostForm} />
    </Drawer.Navigator>
  );
}
