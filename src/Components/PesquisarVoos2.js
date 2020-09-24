import React, {useState} from 'react'
import { View, TextInput, Button, Text} from 'react-native'
import styles from './style'
const PesquisarVoos2 = ({ term2, onTermChange }) => {
    return (
        <>
            <TextInput 
                style={styles.card} 
                placeholder="Vou para..."
                value={term2}
                onChangeText={novoTermo2 => onTermChange(novoTermo2)}
            /> 
        </>
    )
}
export default PesquisarVoos2