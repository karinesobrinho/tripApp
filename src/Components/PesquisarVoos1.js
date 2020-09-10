import React, {useState} from 'react'
import { View, TextInput, Button, Text} from 'react-native'
import styles from './style'
const PesquisarVoos1 = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <>
            <TextInput 
                style={styles.card} 
                placeholder="Saio de..."
                value={term}
                onChangeText={novoTermo => onTermChange(novoTermo) }
                onTermSubmit={() => pesquisaVoos(term)}
            />
        </>
    )
}
export default PesquisarVoos1