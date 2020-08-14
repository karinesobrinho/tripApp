import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Input, Button } from 'react-native-elements'
import styles from '../Components/style'

const LoginCriar = ()=>{
    return(
        <View style={styles.geral} >
            <Text>criar</Text>
            <Input placeholder='Nome'/>
            <Input placeholder='Sobrenome'/>
            <Input placeholder='CPF'/>
            <Input placeholder='Email'/>
            <Input placeholder='Senha'/>
            <Button
                buttonStyle = {styles.button}
                title="Criar conta"
                type = 'outline'
                onPress = {()=> navigation.navigate('Home')}
            />
            <Text>Ao se associar você aceita os</Text>
             <TouchableOpacity
                style = {styles.texto}
            >
                <Text>TERMOS E CONDIÇÕES</Text>
            </TouchableOpacity>    
        </View>
    )
}



export default LoginCriar