import React from "react";
// NAVIGATION //
import { createDrawerNavigator } from "@react-navigation/drawer";
// COMPONENTS //
import Home from "../User/Home";
import Welcome from "../User/Welcome";
import NewPostForm from "../../components/NewPostForm";
import SideBar from "../../components/SideBar";

const Drawer = createDrawerNavigator();

export default function Index({ navigation }) {
  return (
    <Drawer.Navigator 
      // drawerContent={(props) => <SideBar {...props} />}
    >
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
