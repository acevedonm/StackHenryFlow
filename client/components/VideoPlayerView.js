import React, { Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import { styles } from "../styles/styles";


class VideoPlayerView extends Component {
    render(){
        return(
            <View style={styles.contain2}>
                <VideoPlayer 
                source={require('../Videos/Video.mp4')}
                // title={this.props.title}
                // onBack={() => null}
                />
            </View>
            
        )
    }
}

// const styles = StyleSheet.create({
//     contain: {
//         flex: 1
//     }
// })
export default VideoPlayerView