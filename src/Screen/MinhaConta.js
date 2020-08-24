import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { MaterialIcons} from '@expo/vector-icons' 
import styles from '../Components/style'
import MenuHeader from '../Components/MenuHeader'

const MinhaConta = ({navigation})=>{
    return(
        <View>
            <MenuHeader title='Minha conta'/>            
            <View style={styles.box} >
                <TouchableOpacity
                    //onPress = {()=> navigation.navigate('Login')}
                    style={styles.botao}
                >
                    <MaterialIcons name="person" size={32} color="#0066FF" />
                    <Text style={styles.text} >Iniciar sessão</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botao}
                >
                    <MaterialIcons name="settings" size={32} color="#0066FF" />
                    <Text style={styles.text} >Ajustes</Text>
                </TouchableOpacity>
            </View>        
        </View>
    )
}

MinhaConta.navigationOptions = {
    tabBarIcon: <MaterialIcons name="person" size={24} color="gray" />
}

export default MinhaConta