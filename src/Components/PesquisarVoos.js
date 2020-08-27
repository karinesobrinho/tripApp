import React, {useState} from 'react'
import { View, TextInput, Button, Text} from 'react-native'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
const dados = require('./voos.json')

const swap = () => {console.log('swap')}

const PesquisarVoos = ({ term, onTermChange, onTermSubmit, navigation }) => {
     //const [partida, localpartida] = useState['']
     //const [destino, localdestino] = useState['']
  
    return (
        <>
        <View style={styles.container}>
            <TextInput 
                style={styles.card} 
                placeholder="Saio de..."

            />
            <TextInput style={styles.card} placeholder="Vou para..." />
            <Ionicons
                name="ios-swap"
                style={styles.swap}
                onPress={() => swap()}
            />
            
            <TextInput />
        </View>
        <View>
            <Button
                title="Proxima Tela"
                style={styles.botao}
                onPress={() => navigation.navigate('ResultadosVoos')} 
            />
        </View>
        </>
    )
    //dados.filter((infoVoo) => {

    //});
}


export default PesquisarVoos