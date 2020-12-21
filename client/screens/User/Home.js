import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import SearchBar from "./SearchBar"
import { styles } from "../../styles/styles";
import NewPostForm from "../../components/NewPostForm"
import Post from "../../components/Posts"
import Header from "../../components/Header";


//Aca renderizamos SearchBar, Componente nuevo post y Componente post
const Home = ( { navigation } )=>{
    return (
        <>
        <Header navigation={navigation} />
        <View style={styles.body}>
            <SearchBar/>  
            <Text style={styles.h1}>Stack Henry Flow!</Text>
            <NewPostForm/>
            <Post/>
            {/* <TouchableOpacity onPress={() => { navigation.navigate('NewPostForm') }}>
                <Text>Postear</Text>
            </TouchableOpacity> */}
        </View>
        </>
    )
}

export default Home;