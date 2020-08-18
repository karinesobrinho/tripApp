import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { FontAwesome } from '@expo/vector-icons' 

const Ofertas = ()=>{
    return(
        <View>
            <Text>Ofertas</Text>
        </View>
    )
}

Ofertas.navigationOptions = {
    tabBarIcon:  <FontAwesome name="exclamation" size={24} color="black" />
 }

const styles = StyleSheet.create({})

export default Ofertas