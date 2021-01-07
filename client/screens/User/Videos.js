import React from "react";
import { View, Text } from "react-native";
import { Video } from 'expo-av';
import { styles } from "../../styles/styles";
import Header from "../../components/Header";
import { yellow, black, white, errorRed, gray } from "../../styles/globalsVariables";
import { darkStyles } from "../../styles/darkStyles";
import DarkThemeContext from '../../DarkThemeContext'



export default function Videos  ({ navigation }) {

const isDarkMode = React.useContext(DarkThemeContext);

    return (
        <View >
            <Header navigation={navigation} />
            <View style={!isDarkMode ? styles.body : darkStyles.bodydark}>
            <Text style={!isDarkMode ? styles.h1clases : darkStyles.h1classesdark}>Clases</Text>
            <Text style={!isDarkMode ?styles.h2clases : darkStyles.h2classesdark}>00-IntroToCS</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609993718~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=e3979429e64e1346467efb9b1a25469574c47d0807694199ed9cf2bee45af846/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        // shouldPlay
        style={styles.containerVideo}
        
        />


        <Text style={!isDarkMode ?styles.h2clases : darkStyles.h2classesdark}>01-JavaScriptAvanzado-I</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609993718~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=e3979429e64e1346467efb9b1a25469574c47d0807694199ed9cf2bee45af846/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        style={styles.containerVideo2}
        />

        <Text style={!isDarkMode ?styles.h2clases : darkStyles.h2classesdark}>02-JavaScriptAvanzado-II</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609993718~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=e3979429e64e1346467efb9b1a25469574c47d0807694199ed9cf2bee45af846/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        style={styles.containerVideo2}
        />

        <Text style={!isDarkMode ?styles.h2clases : darkStyles.h2classesdark}>03-EstructuraDeDatos-I</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609993718~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=e3979429e64e1346467efb9b1a25469574c47d0807694199ed9cf2bee45af846/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        style={styles.containerVideo2}
        />

        <Text style={!isDarkMode ?styles.h2clases : darkStyles.h2classesdark}>04-EstructuraDeDatos-II</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609993718~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=e3979429e64e1346467efb9b1a25469574c47d0807694199ed9cf2bee45af846/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        style={styles.containerVideo2}
        />

        <Text style={!isDarkMode ?styles.h2clases : darkStyles.h2classesdark}>05-EstructuraDeDatos-III</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609993718~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=e3979429e64e1346467efb9b1a25469574c47d0807694199ed9cf2bee45af846/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        style={styles.containerVideo2}
        />

        <Text style={!isDarkMode ?styles.h2clases : darkStyles.h2classesdark}>06-Algoritmos-I</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609993718~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=e3979429e64e1346467efb9b1a25469574c47d0807694199ed9cf2bee45af846/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        style={styles.containerVideo2}
        />

        <Text style={!isDarkMode ?styles.h2clases : darkStyles.h2classesdark}>07-Algoritmos-II</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609993718~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=e3979429e64e1346467efb9b1a25469574c47d0807694199ed9cf2bee45af846/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        style={styles.containerVideo2}
        />
         </View>
        </View>
        //video funcionando

        
                  
            
       
           
    )
}