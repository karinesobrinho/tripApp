import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Input, Button } from 'react-native-elements'

const LoginCriar = ()=>{
    return(
        <View>
            <Text>criar</Text>
            <Input placeholder='Email'/>
            <Input placeholder='Senha'/>
            <Button
                buttonStyle = {styles.button}
                title="Criar conta"
                type = 'outline'
                onPress = {()=> navigation.navigate('Home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default LoginCriar