import React from 'react'
import {View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native'
import styles from '../Components/style'

const Carregando = ({navigation})=>{
    return(
        <TouchableOpacity
            onPress={()=> navigation.navigate('Login')} 
        >
            <ImageBackground 
                source={require('../images/img.jpg')} style={styles.image} >
            <View style={styles.geral} >
                <Image source={require('../images/cvc.png')} style={styles.carregando}/>
            </View> 
            </ImageBackground>      
        </TouchableOpacity>
    )
}

Carregando.navigationOptions = () => {
    return {
      header: () => false,
    }
}

export default Carregando