import React from "react";
import { View, Text} from "react-native";
import { Video } from 'expo-av';
import { styles } from "../../styles/styles";

export default function Videos  ({ navigation }) {

    return (
        <View>
            <Text style={styles.h1}>Clases</Text>
        <Video
        source={{ uri: "https://vod-progressive.akamaized.net/exp=1609961512~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1823%2F19%2F484116892%2F2167668931.mp4~hmac=d53e8df37e8a1778d17d75d2b1b8082ad44d41b297efbecb6a543522ba9df26c/vimeo-prod-skyfire-std-us/01/1823/19/484116892/2167668931.mp4"}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls={true}
        shouldPlay
        style={{ width: 600, height: 600 }}
        />
        </View>
    )
}