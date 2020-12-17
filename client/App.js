import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from "./screens/Login"
import Register from "./screens/Register"
import ForgotPassword from "./screens/ForgotPassword"
import firebase from "../database/firebase" //esta linea sirve para inicializar el backend
import Welcome from "./screens/Welcome"
import NewPostForm from "./components/NewPostForm"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="NewPostForm" component={NewPostForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}