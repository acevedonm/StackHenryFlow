import React, { Component} from 'react'; 
import {StyleSheet,Text, View, Image} from 'react-native';

class MusicApp extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{...StyleSheet.absoluteFill}}>
                    <Image
                    source={require('../../assets/animacion.png')}
                    style={{flex: 1, height: null, width: null}}
                    />
                    
                </View>
            </View>
        );
    }
}

export default MusicApp;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})