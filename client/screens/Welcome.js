import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import SearchBar from "./SearchBar"
import { styles } from "../styles/styles";
import NewPostForm from "../components/NewPostForm"
import Post from "../components/Posts"


//Aca renderizamos SearchBar, Componente nuevo post y Componente post
const Welcome = ( props, { navigation } )=>{

    const array = props.route.params.posteosArray
    return (
        <ScrollView style={styles.header}>
            <SearchBar/>
            
        <View/>
            <Text>¡Bienvenido a Stack Henry Flow!</Text>
            <NewPostForm/>
            {
                array?.map((posteo) => {
                    return (
                        <View>
                            
                        </View>
                    )
                })
            }
            {/* <TouchableOpacity onPress={() => { navigation.navigate('NewPostForm') }}>
                <Text>Postear</Text>
            </TouchableOpacity> */}
        </ScrollView>
    )
}

export default Welcome;