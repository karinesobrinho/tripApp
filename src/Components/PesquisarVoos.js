import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
import dados from './voos.json'

const PesquisarVoos = () => {
  
    return (
        <>
        <View style={styles.container}>
            <TextInput style={styles.card} placeholder="Saio de..." />
            <TextInput style={styles.card} placeholder="Vou para..." />
            <Ionicons name="ios-swap" style={styles.swap} />
            
            <TextInput />
        </View>
        </>
    )
    //dados.filter((infoVoo) => {

    //});
}


export default PesquisarVoos