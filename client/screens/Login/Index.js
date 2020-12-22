import React from "react";
// NAVIGATION //
import { createDrawerNavigator } from "@react-navigation/drawer";
// COMPONENTS //
import Home from "../User/Home";
import Profile from "../User/Profile"
import Comments from "../../components/Comments"
import SideBar from "../../components/SideBar";
import ProfileEdit from "../User/ProfileEdit"
import PostsList from "../../components/PostsList"
import PostDetails from "../../components/PostDetails"

const Drawer = createDrawerNavigator();

export default function Index({ navigation }) {
  return (
    <Drawer.Navigator 
      // drawerContent={(props) => <SideBar {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Comments" component={Comments} />
      <Drawer.Screen name="PostsList" component={PostsList} />
      <Drawer.Screen name="PostDetails" component={PostDetails} />
      {/* <Drawer.Screen name="ProfileEdit" component={ProfileEdit} /> */}
    </Drawer.Navigator>
  );
}
