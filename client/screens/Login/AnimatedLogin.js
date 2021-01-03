import React from 'react'; 
import {StyleSheet,Text, View} from 'react-native';

import {Asset} from 'expo-asset';
import {AppLoading} from 'expo';
import MusicApp from './MusicApp'

function cacheImages(images) {
    return images.map(image => {
        if(typeof image === 'string'){
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

// export default function AnimatedLogin(){
//     return(
//         <View style={styles.container}>
//             <Text>Abrir aplicacion!!</Text> 
//         </View>
//     );
// }

 class AnimatedLogin extends React.Component{
    constructor(){
        super()
        this.state={
            isReady:false,
        }
    }

    async _loadAssetsAsync(){
        const imageAssets = cacheImages([require('../../assets/animacion.png')]);

        await Promise.all([...imageAssets]);
    }

    render(){
        if (!this.state.isReady) {
            return (
                <AppLoading
                startAsync={this._loadAssetsAsync}
                onFinish={() => this.setState({isReady: true})}
                onError={console.warn}
                />
            );
        }
        return <MusicApp />
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AnimatedLogin;