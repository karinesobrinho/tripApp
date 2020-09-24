import React, { useState } from 'react'
import {View, Text, Button} from 'react-native'
import PesquisarVoos1 from '../Components/PesquisarVoos1'
import PesquisarVoos2 from '../Components/PesquisarVoos2'
import styles from '../Components/style'
import { Ionicons } from '@expo/vector-icons'
import MenuHeader from '../Components/MenuHeader'

const dados = require('../Components/voos.json')


const swap = () => {console.log('swap')}

const Voos = ({navigation}) => {
    const [termo, setTermo] = useState('');
    const [termo2, setTermo2] = useState('');
    const [resultados, setResultados] = useState([]);
    const [mensagemErro, setMensagemErro] = useState('');

    const procuraVoos = dados.voos.filter(pesquisa)
    

    function pesquisa(voo) {
        voo.localpartida === {termo} && voo.localdestino === {termo2} ?
        setResultados(resultados => [...resultados, voo]) : console.log('Erro!')

        return (
            console.log(voo),
            console.log(resultados)
        )
        //return voo.localpartida === `${termo}` && voo.localdestino === `${termo2}` ?
        //console.log(voo) : console.log('Vix!')
    }

    return (
        <>
        <View >
            <MenuHeader title='Voos'/>
            <View style={styles.container}> 
                <PesquisarVoos1 
                    term={termo}
                    //onTermChange={setTermo}
                    onTermSubmit={(termo) => setTermo(termo)}
                />

                <PesquisarVoos2 
                    term={termo2}
                    //onTermChange={setTermo2}
                    onTermSubmit={(termo2) => setTermo(termo2)}
                />

                <Ionicons
                    name="ios-swap"
                    style={styles.swap}
                    onPress={() => swap()}
                />
            </View>
        </View>
        <View>
            <Button 
             title="Pesquisar"
             style={styles.button}
             onPress={(termo, termo2) => pesquisa(termo, termo2)}
             //{() => navigation.navigate('ResultadosPesquisa')}
            />
        </View>
        <Text>{termo}</Text>
        <Text>{termo2}</Text>
        <Text>Encontrados {resultados.length} resultados.</Text>
        </>
    );
}

export default Voos