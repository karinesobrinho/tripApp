import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Ionicons} from '@expo/vector-icons' 

const Notificacoes = ()=>{
    return(
        <View>
            <Text>Notificacoes</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

Notificacoes.navigationOptions = {
    tabBarIcon:  <Ionicons name="ios-notifications" size={24} color="black" />
}

export default Notificacoes