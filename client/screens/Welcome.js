import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import SearchBar from "./SearchBar"
import { styles } from "../styles/styles";
import NewPostForm from "../components/NewPostForm"


//Aca renderizamos SearchBar, Componente nuevo post y Componente post
const Welcome = ( { navigation } )=>{
    return (
        <View style={styles.header}>
            <SearchBar/>
            
        <View/>
            <Text>¡Bienvenido a Stack Henry Flow!</Text>
            <NewPostForm/>
            {/* <TouchableOpacity onPress={() => { navigation.navigate('NewPostForm') }}>
                <Text>Postear</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default Welcome;