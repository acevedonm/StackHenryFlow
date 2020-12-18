import React from 'react';
// NAVIGATION //
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
// SCREENS //
import Login from "./screens/Login/Login"
import Register from "./screens/Login/Register"
import ForgotPassword from "./screens/Login/ForgotPassword"
import Index from "./screens/Login/Index"
// DATABASE //
import firebase from "../database/firebase" //esta linea sirve para inicializar el backend

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}