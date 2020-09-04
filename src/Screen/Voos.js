import React, {  useState } from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import PesquisarVoos1 from '../Components/PesquisarVoos1'
import PesquisarVoos2 from '../Components/PesquisarVoos2'
import styles from '../Components/style'
import { Ionicons } from '@expo/vector-icons'
import MenuHeader from '../Components/MenuHeader'

const swap = () => {console.log('swap')}

const Voos = ({navigation}) => {
    const [termo, setTermo] = useState('')
    const [termo2, setTermo2] = useState('')
    return (
        <>
        <View >
            <MenuHeader title='Voos'/>
            <View style={styles.container}> 
                <PesquisarVoos1 
                    term={termo}
                    onTermChange={(novoTermo) => setTermo(novoTermo)}
                />

                <Ionicons
                    name="ios-swap"
                    style={styles.swap}
                    onPress={() => swap()}
                />

                <PesquisarVoos2 
                    term={termo2}
                    onTermChange={(novoTermo2) => setTermo2(novoTermo2)}
                />
            </View>
        </View>
        <View>
            <Button 
             title="Pesquisar"
             style={styles.button}
             onPress={() => navigation.navigate('ResultadosPesquisa')}
            />
        </View>
        <Text>{termo}</Text>
        <Text>{termo2}</Text>
        </>
    );
}

export default Voos