import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, FlatList} from 'react-native'
import styles from '../Components/style'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import Header from '../Components/Header'
import Cards from '../Components/cards'
import {returnHoteis, returnViagens, returnVoos} from '../Components/returnList'

const viagem = require('../Components/viagens.json')

const Home = ({navigation})=>{
   
    return(
        <>
            <View>
                <Header/>
            </View>
            <ScrollView>
                <Image source={require('../images/home.png')} style={homeStyle.image1} />
                <Text style={homeStyle.texto3} >Aproveite as nossas promoções para planejar sua viagem </Text>
                <View>
                    <FlatList
                        horizontal={true}
                        data={viagem.viagens.geral}
                        renderItem={returnViagens}
                        keyExtractor={data => data.id}
                        showsHorizontalScrollIndicator= {false}
                    />
                </View> 
                <View style={homeStyle.row} >
                    <View>
                        <Text style={homeStyle.texto1} >Encontre o melhor preço</Text>
                        <Text style={homeStyle.texto1} >para o seu voo</Text>
                    </View>
                    <Text style={homeStyle.texto2} > Ver todos </Text>
                </View>
                <View>
                    <FlatList
                        data={viagem.viagens.voos}
                        renderItem={returnVoos}
                        keyExtractor={data => data.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator= {false}
                    />
                </View>
                <View style={homeStyle.row} >
                    <View>
                        <Text style={homeStyle.texto1} >Desfrute da sua acomodação a </Text>
                        <Text style={homeStyle.texto1} >um excelente preço! </Text>
                    </View>
                    <Text style={homeStyle.texto2} > Ver todos </Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={viagem.viagens.hoteis}
                        renderItem={returnHoteis}
                        keyExtractor={data => data.id}
                        showsHorizontalScrollIndicator= {false}
                    />
                </View>        
            </ScrollView>
    </>
    )
}

const homeStyle = StyleSheet.create({
    image1:{
        width: 340,
        height: 200,
        padding: 5,
        margin: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    texto1:{
        fontSize: 18,
    },
    texto2:{
        color: '#0066FF',
        fontSize: 15,
        margin: 2,
    },
    row:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    texto3:{
        marginHorizontal: 10,
        margin: 2,
        fontSize:18,
    }
})

Home.navigationOptions = ()=> {
    return {
        tabBarIcon:  <MaterialCommunityIcons name="earth" size={24} color="gray"/>
    }
}

export default Home
