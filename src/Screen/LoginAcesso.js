import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import { Input, Button } from 'react-native-elements'
import styles from '../Components/style'

const LoginAcesso = (navigation)=>{
    return(
        <ImageBackground 
                source={require('../images/img.jpg')} style={styles.image} >
            <Image source={require('../images/cvc.png')} style={styles.logo}/>
            <View style={styles.geral} >
                <Input placeholder='Email'/>
                <Input placeholder='Senha'/>
                <Button
                    buttonStyle = {styles.button}
                    title="Entrar"
                    type = 'outline'
                    onPress = {()=> navigation.navigate('Home')}
                /> 
            </View>
        </ImageBackground>
       
    )
}

export default LoginAcesso