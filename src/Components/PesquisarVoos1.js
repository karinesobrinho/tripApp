import React, {useState} from 'react'
import { View, TextInput, Button, Text} from 'react-native'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
const dados = require('./voos.json')

const swap = () => {console.log('swap')}

const PesquisarVoos1 = ({ term, onTermChange, onTermSubmit, navigation }) => {
     //const [partida, localpartida] = useState['']
     //const [destino, localdestino] = useState['']
  
    return (
        <>
            <TextInput 
                style={styles.card} 
                placeholder="Saio de..."
                value={term}
                onChangeText={novoTermo => onTermChange(novoTermo) }
            />
        </>
    )
    //dados.filter((infoVoo) => {

    //});
}


export default PesquisarVoos1