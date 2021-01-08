import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
// NAVIGATION //
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import createSwitchNavigator from "react-navigation";
// SCREENS //
import Login from "./screens/Login/Login";
import Register from "./screens/Login/Register";
import ForgotPassword from "./screens/Login/ForgotPassword";
import Index from "./screens/Login/Index";
// DATABASE //
import firebase from "./database/firebase"; //esta linea sirve para inicializar el backend
import { getUserLogin } from "./functions/getUserLogin";
//DARK MODE//
import AsyncStorage from "@react-native-async-storage/async-storage";
import DarkThemeContext from "./DarkThemeContext";
const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  async function getDarkMode() {
    let theme = await AsyncStorage.getItem("DARK_MODE");
    if (theme === null) {
      AsyncStorage.setItem("DARK_MODE", false);
    } else {
      theme = theme === "true";
      setIsDarkMode(theme);
    }
  }

  async function toggleTheme() {
    const current = await AsyncStorage.getItem("DARK_MODE");
    const currentIsDarkMode = current == "false" ? false : true;
    await AsyncStorage.setItem("DARK_MODE", !currentIsDarkMode);
    setIsDarkMode(!currentIsDarkMode);
  }

  useEffect(() => {
    getUserLogin()
      .then((user) => (user ? setUserId(user.user.uid) : null))
      .then(() => setLoading(false));
    getDarkMode();
  }, []);

  return loading ? (
    <>
      <ActivityIndicator size="large" color="#FFFF01" />
      <Text style={{ color: "#FFF", marginTop: 15 }}>Cargando..</Text>
    </>
  ) : (
    <DarkThemeContext.Provider value={isDarkMode}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {console.log("Entre en APP")}
          {!userId ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen
                name="Index"
                component={Index}
                initialParams={{ toggleTheme, isDarkMode }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Index"
                component={Index}
                initialParams={{ toggleTheme, isDarkMode }}
              />
              <Stack.Screen name="Login" component={Login} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </DarkThemeContext.Provider>
  );
}
