const USER_LOGIN= '@user_login'
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {DrawerItem} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function LogOut({navigation}) {
    const logout = () => {
      console.log('navv', navigation)
      AsyncStorage.removeItem(USER_LOGIN)
      navigation.navigate('Login')
    }
  
    return (
    <View>
        
            <DrawerItem 
                icon={({color, size}) => (
                    <Icon 
                    name="exit-to-app" 
                    color={color}
                    size={size}
                    />
                )}
                label="Sign Out"
            onPress={() => {logout()}}
    />
  </View>);
  }
