import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Ionicons, AntDesign} from '@expo/vector-icons' 

const Notificacoes = ()=>{
    return(
        <View style={styles.icone} >
            <AntDesign name="notification" size={300} color="gray" />
            <Text style={styles.texto} >Você não possui notificações</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icone:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        fontSize: 30,
        textAlign: 'center',
        color: 'gray',
    }
})

Notificacoes.navigationOptions = {
    tabBarIcon:  <Ionicons name="ios-notifications" size={24} color="gray" />
}

export default Notificacoes