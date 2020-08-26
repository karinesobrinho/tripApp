import React, {useState} from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
const dados = require('./voos.json')

const ResultadosVoos = ({ navigation }) => {
    const [resultado, setResultado] = useState(null)
    const pegarResultado = dados.filter(() => { console.log('filtro') })
    
    return (
        <>
        <View>
            <Text>Oi</Text>
        </View>
        </>
    )
}

export default ResultadosVoos