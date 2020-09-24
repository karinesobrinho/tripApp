import React, {  useState } from 'react'
import {View, StyleSheet, Text, Button, FlatList} from 'react-native'
import styles from '../Components/style'
import { Ionicons } from '@expo/vector-icons'
import MenuHeader from '../Components/MenuHeader'
import PesquisarVoos1 from '../Components/PesquisarVoos1'
import PesquisarVoos2 from '../Components/PesquisarVoos2'
import ResultadosVoos from '../Components/ResultadosVoos'
const dados = require("../Components/voos.json")

const ResultadosPesquisa = ({ termo, termo2 }) => {
    
    return (
        <>
            <View>
                <MenuHeader title="Voos em oferta" />
            </View>
            <View>
                <PesquisarVoos1 />
                <PesquisarVoos2 />
                {mensagemErro ? <Text>{mensagemErro}</Text> : null} 
                <Text>Encontrei {resultados.length} resultados.</Text>            
                <FlatList
                    data={dados.voos.localpartida==`${termo}` && dados.voos.localdestino==`${termo2}`}
                    renderItem={returnViagens}
                    keyExtractor={data => data.id}
                    showsVerticalScrollIndicator={false}
                /> 
            </View>
        </>
    )
}

export default ResultadosPesquisa