import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import PesquisarVoos from '../Components/PesquisarVoos'
import styles from '../Components/style'
import MenuHeader from '../Components/MenuHeader'

const Voos = () => {
    return (
        <>
        <View>
            <MenuHeader title='Voos'/>
            <PesquisarVoos />
        </View>
        </>
    );
}

export default Voos