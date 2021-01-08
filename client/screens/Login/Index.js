import React from "react";
// NAVIGATION //
import { createDrawerNavigator } from "@react-navigation/drawer";
// COMPONENTS //
import Home from "../User/Home";
import Profile from "../User/Profile"
import DrawerContent from "../../components/DrawerContent";
import ProfileEdit from "../User/ProfileEdit"
import PostsList from "../User/PostsList"
import PostDetails from "../User/PostDetails"
import NewPostForm from "../User/NewPostForm";
import MyPosts from "../User/MyPosts"
import Videos from "../User/Videos";
import DarkThemeContext from '../../DarkThemeContext'

const Drawer = createDrawerNavigator();

export default function Index(props) {
  const isDarkMode = React.useContext(DarkThemeContext);
  return (
    <Drawer.Navigator 
      drawerContent={() => <DrawerContent {...props} isDarkMode={isDarkMode} />}
    >
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Profile" component={Profile}/>
      <Drawer.Screen name="PostsList" component={PostsList}  />
      <Drawer.Screen name="MyPosts" component={MyPosts} />
      <Drawer.Screen name="PostDetails" component={PostDetails}  /> 
      <Drawer.Screen name="ProfileEdit" component={ProfileEdit}  />
      <Drawer.Screen name="NewPostForm" component={NewPostForm} />
      <Drawer.Screen name="Videos" component={Videos} />
    </Drawer.Navigator>
  );
}
