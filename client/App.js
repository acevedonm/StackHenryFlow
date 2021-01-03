import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
// NAVIGATION //
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// SCREENS //
import Login from "./screens/Login/Login";
import Register from "./screens/Login/Register";
import ForgotPassword from "./screens/Login/ForgotPassword";
import Index from "./screens/Login/Index";
// DATABASE //
import firebase from "./database/firebase"; //esta linea sirve para inicializar el backend
import { getUserLogin } from "./functions/getUserLogin";
import AnimatedLogin from "./screens/Login/AnimatedLogin"
const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getUserLogin()
      .then((user) => (user ? setUserId(user.user.uid) : null))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <ActivityIndicator size="large" color="#FFFF01" />
        <Text style={{ color: "#FFF", marginTop: 15 }}>Cargando..</Text>
      </>
    );
  } else if (!userId) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AnimatedLogin" component={AnimatedLogin} />
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Index" component={Index} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
