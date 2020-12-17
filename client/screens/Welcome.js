import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

//Aca renderizamos SearchBar, Componente nuevo post y Componente post
const Welcome = ( { navigation } )=>{
    return (
        <View>
            <Text>¡Bienvenido a Stack Henry Flow!</Text>
            {/* <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                <Text>Ir al Login</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default Welcome;