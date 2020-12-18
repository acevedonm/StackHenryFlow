import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import NewPostForm from "../../components/NewPostForm";
import Header from "../../components/Header";

//Aca renderizamos SearchBar, Componente nuevo post y Componente post
const Welcome = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.header}>
        <Text>¡Bienvenido a Stack Henry Flow!</Text>
        <NewPostForm />
        {/* <TouchableOpacity onPress={() => { navigation.navigate('NewPostForm') }}>
                <Text>Postear</Text>
            </TouchableOpacity> */}
      </View>
    </>
  );
};

export default Welcome;
