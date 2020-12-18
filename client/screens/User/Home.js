import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from '../../styles/styles'
import Header from '../../components/Header'

const Index = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>¡Bienvenido a Stack Henry Flow!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      >
        <Text>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
