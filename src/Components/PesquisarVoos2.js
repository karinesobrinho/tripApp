import React, {useState} from 'react'
import { View, TextInput, Button, Text} from 'react-native'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
const dados = require('./voos.json')

const PesquisarVoos1 = ({ term, onTermChange, onTermSubmit }) => {
     //const [partida, localpartida] = useState['']
     //const [destino, localdestino] = useState['']
  
    return (
        <>
            <TextInput 
                style={styles.card} 
                placeholder="Vou para..."
                value={term}
                onChangeText={novoTermo2 => onTermChange(novoTermo2) }
            /> 
        </>
    )
    //dados.filter((infoVoo) => {

    //});
}


export default PesquisarVoos1