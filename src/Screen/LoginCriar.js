import React from 'react'
import {View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native'
import { Input, Button } from 'react-native-elements'
import styles from '../Components/style'

const LoginCriar = ({ navigation })=>{
    return( 
        <ImageBackground 
            source={require('../images/img.jpg')} style={styles.image} >
             <View style={styles.geral}> 
             <Image source={require('../images/cvc.png')} style={styles.logo}/>
                <Input placeholder='Nome'/>
                <Input placeholder='Sobrenome'/>
                <Input placeholder='CPF'/>
                <Input placeholder='Email'/>
                <Input placeholder='Senha'/>
                <Button
                    buttonStyle = {styles.button}
                    title="Criar conta"
                    type = 'outline'
                    //onPress = {()=> navigation.navigate('Iniciar')}
                />
                <Text style = {styles.texto}>Ao se associar você aceita os</Text>
                <TouchableOpacity
                    style = {styles.texto}
                >
                    <Text style = {styles.texto}>TERMOS E CONDIÇÕES</Text>
                </TouchableOpacity>  
            </View>
        </ImageBackground>  
    )
}

export default LoginCriar