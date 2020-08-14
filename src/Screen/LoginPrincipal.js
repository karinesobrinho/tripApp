import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../Components/style'

const LoginPrincipal = ({navigation})=>{
    return(
        <View style={styles.geral} > 
            <Text  style= {styles.texto} >Login</Text>
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
            <TouchableOpacity
                onPress={()=> navigation.navigate('Home')}
                style = {styles.texto}
            >
                <Text>Entrar como convidado</Text>
            </TouchableOpacity>        
        </View>
    )
}



export default LoginPrincipal