import React from 'react'
import {ScrollView, View,StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native'
import { FontAwesome, 
    MaterialIcons, 
    Fontisto, 
    FontAwesome5,
    MaterialCommunityIcons  } from '@expo/vector-icons' 
import MenuHeader from '../Components/MenuHeader'
import {returnHoteis, returnViagens, returnVoos} from '../Components/returnList'
import MenuOfertas from '../Components/MenuOfertas'

//promocoes, voo, hoteis, pacotes, seguros, atividades e carros

const viagem = require('../Components/viagens.json')

const Ofertas = ()=>{
    return(
    <View>
        <View>
            <MenuHeader title='Ofertas'/>            
        </View>
        <MenuOfertas/>
        <FlatList
            style ={styles.lista}
            data={viagem.viagens.geral}
            renderItem={returnViagens}
            keyExtractor={data => data.id}
            showsVerticalScrollIndicator={false}
        />  
    </View>
    )
}

Ofertas.navigationOptions = {
    tabBarIcon:  <FontAwesome name="exclamation" size={24} color="gray" />
 }

const styles = StyleSheet.create({
    lista:{
        alignSelf: 'center',
    },
    menuSuperior:{
        flexDirection: 'row',
        backgroundColor: '#A9A9A9',
        
    },
    text:{
        fontSize: 20,
        margin: 5,
    },
    direcao:{
        flexDirection: 'row'
    }
})

export default Ofertas
