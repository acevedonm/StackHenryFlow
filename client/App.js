import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from "./screens/Login"
import Register from "./screens/Register"
import ForgotPassword from "./screens/ForgotPassword"
import Profile from "./screens/Profile"
import ProfileEdit from "./screens/ProfileEdit"
import firebase from "../database/firebase"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Profile" screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="ProfileEdit" component={ProfileEdit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}