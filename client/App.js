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
//DARK MODE//
import AsyncStorage from "@react-native-async-storage/async-storage";
import DarkThemeContext from './DarkThemeContext'
const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    getUserLogin()
      .then((user) => (user ? setUserId(user.user.uid) : null))
      .then(() => setLoading(false));
  }, []);

  useEffect(async() => {
    let theme = await AsyncStorage.getItem('DARK_MODE')
    if (theme === null) {
       AsyncStorage.setItem('DARK_MODE', false);
    } else {
      theme = (theme === "true")
      setIsDarkMode(theme)
    }
  }, []);

  async function toggleTheme() {
    const current = await AsyncStorage.getItem('DARK_MODE')
    console.log('current',current)
    const currentIsDarkMode = current == 'false' ? false : true
    console.log('currentIsDarkMode',currentIsDarkMode)
    console.log('tonces seteoo',!currentIsDarkMode)

    await AsyncStorage.setItem('DARK_MODE', !currentIsDarkMode);
    setIsDarkMode(!currentIsDarkMode)
  };
  console.log('sdfsfsdfsdfsdf', isDarkMode)

return (
  loading ? (
    <>
      <ActivityIndicator size="large" color="#FFFF01" />
      <Text style={{ color: "#FFF", marginTop: 15 }}>Cargando..</Text>
    </>
  ) : 
  !userId ?  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen  name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Index" component={Index} />
    </Stack.Navigator>
  </NavigationContainer> : 
      <DarkThemeContext.Provider value={isDarkMode}>
  <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Index} initialParams={{toggleTheme, isDarkMode}} />
          </Stack.Navigator>
        </NavigationContainer>
        </DarkThemeContext.Provider>

)
}
