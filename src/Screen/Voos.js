import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import PesquisarVoos from '../Components/PesquisarVoos'
import styles from '../Components/style'

const Voos = () => {
    return (
        <>
        <View>
            <PesquisarVoos />
        </View>
        </>
    );
}

Voos.navigationOptions = () => {
    return {
      header: () => false,
    }
}
export default Voos