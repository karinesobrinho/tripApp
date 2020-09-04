import React, {  useState } from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import ResultadosVoos from '../Components/ResultadosVoos'
import styles from '../Components/style'
import { Ionicons } from '@expo/vector-icons'
import MenuHeader from '../Components/MenuHeader'
import PesquisarVoos1 from '../Components/PesquisarVoos1'
import PesquisarVoos2 from '../Components/PesquisarVoos2'

const ResultadosPesquisa = () => {
    return (
        <>
            <View>
                <MenuHeader title="Voos em oferta" />
                <View style={styles.container}>
                    <PesquisarVoos1 value={termo}/>
                    <PesquisarVoos2 value={termo2} />
                    <Ionicons
                    name="ios-swap"
                    style={styles.swap}
                    onPress={() => swap()}
                />
                </View>
                <ResultadosVoos />
            </View>
        </>
    )
}

export default ResultadosPesquisa