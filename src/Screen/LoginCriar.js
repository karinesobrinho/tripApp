import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Input, Button } from 'react-native-elements'

const LoginCriar = ()=>{
    return(
        <View>
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

const styles = StyleSheet.create({
    
})

export default LoginCriar