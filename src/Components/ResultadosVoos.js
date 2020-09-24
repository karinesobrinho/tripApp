import React from 'react'
import { View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native'
import cards from './cards'
//import useResultados from '../hooks/useResultados'
import { Ionicons } from '@expo/vector-icons'

const ResultadosVoos = ({termo, termo2, results}) => {
//    const [pesquisaVoos, mensagemErro, resultados] = useResultados();


    return (
        <>

            <Text>Saindo de{termo}; Indo para{termo2}</Text>
            <Text>{compania}</Text>
            
        </>
    )
}

export default ResultadosVoos