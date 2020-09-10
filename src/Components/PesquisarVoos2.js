import React, {useState} from 'react'
import { View, TextInput, Button, Text} from 'react-native'
import styles from './style'
const PesquisarVoos2 = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <>
            <TextInput 
                style={styles.card} 
                placeholder="Saio de..."
                value={term}
                onChangeText={novoTermo2 => onTermChange(novoTermo2) }
            /> 
        </>
    )
}
export default PesquisarVoos2