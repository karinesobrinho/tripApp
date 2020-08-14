import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Input, Button } from 'react-native-elements'
import styles from '../Components/style'

const LoginAcesso = ()=>{
    return(
        <View style={styles.geral} >
            <Text>Login</Text>
            <Input placeholder='Email'/>
            <Input placeholder='Senha'/>
            <Button
                buttonStyle = {styles.button}
                title="Entrar"
                type = 'outline'
                onPress = {()=> navigation.navigate('Home')}
            />
        </View>
    )
}


export default LoginAcesso