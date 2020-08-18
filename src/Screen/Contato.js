import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Foundation } from '@expo/vector-icons' 

const Contato = ()=>{
    return(
        <View>
            <Text>contatos</Text>
        </View>
    )
}

Contato.navigationOptions = {
    tabBarIcon: <Foundation name="telephone" size={24} color="black" />
}

export default Contato