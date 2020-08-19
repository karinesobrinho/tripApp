import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image} from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../Components/style'

const LoginPrincipal = ({navigation})=>{
    return(
            <ImageBackground 
                source={require('../images/img.jpg')} style={styles.image} >
            <View style={styles.geral} >
            <Image source={require('../images/cvc.png')} style={styles.logo}/>
                <Button
                    buttonStyle = {styles.button}
                    title="Entrar"
                    type = 'outline'
                    onPress = {()=> navigation.navigate('Acesso')}
                />
                <Button
                    buttonStyle = {styles.button}
                    title="Criar conta"
                    type = 'outline'
                    onPress = {()=> navigation.navigate('Criar')}
                />
                </View>
                <TouchableOpacity style = {styles.rodape}
                    onPress={()=> navigation.navigate('Home')}                 
                >
                    <Text style = {styles.rodape}  >Entrar como convidado</Text>
                </TouchableOpacity>  
            </ImageBackground>      
    )
}

LoginPrincipal.navigationOptions = () => {
    return {
      header: () => false,
    }
}

export default LoginPrincipal