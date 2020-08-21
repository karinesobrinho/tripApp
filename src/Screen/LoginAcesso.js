import React from 'react'
import {View, ImageBackground, TouchableOpacity, Text, Image} from 'react-native'
import { Input, Button } from 'react-native-elements'
import styles from '../Components/style'

const LoginAcesso = (navigation)=>{
    return(
        <ImageBackground 
                source={require('../images/img.jpg')} style={styles.image} >
            <View style={styles.geral} >
            <Image source={require('../images/cvc.png')} style={styles.logo}/>
                <Input placeholder='Email'/>
                <Input placeholder='Senha'/>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Home')}                 
                >
                    <Text style = {styles.texto}  >Esqueci minha senha</Text>
                </TouchableOpacity>  
                <Button
                    buttonStyle = {styles.button}
                    title="Entrar"
                    type = 'outline'
                    onPress = {()=> navigation.navigate('Iniciar')}
                /> 
            </View>
        </ImageBackground>
       
    )
}

export default LoginAcesso