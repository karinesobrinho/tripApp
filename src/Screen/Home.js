import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView, Button} from 'react-native'
import styles from '../Components/style'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import Header from '../Components/Header'

const viagens = require('../Components/viagens.json')
console.log(viagens)

const Home = ({navigation})=>{
    return(
        <>
            <View>
                <Header/>
            </View>
            <ScrollView>
                <Image source={require('../images/home.png')} style={homeStyle.image1} />
                <Text style={homeStyle.texto1} >Aproveite as nossas promoções para planejar sua viagem </Text>
                <View style={homeStyle.row} >
                    <View>
                        <Text style={homeStyle.texto1} >Encontre o melhor preço</Text>
                        <Text style={homeStyle.texto1} >para o seu voo</Text>
                    </View>
                    <Text style={homeStyle.texto2} > Ver todos </Text>
                </View>
                <View style={homeStyle.row} >
                    <View>
                        <Text style={homeStyle.texto1} >Desfrute da sua acomodação a </Text>
                        <Text style={homeStyle.texto1} >um excelente preço! </Text>
                    </View>
                    <Text style={homeStyle.texto2} > Ver todos </Text>
                </View>
                <Image source={{uri: viagens.image}} />
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
                <Text styles={styles.texto} >Home</Text>
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
    },
    texto1:{
        fontSize: 18,
        //margin: 10,
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
    }

})

Home.navigationOptions = ()=> {
    return {
        tabBarIcon:  <MaterialCommunityIcons name="earth" size={24} color="gray"/>
    }
}


export default Home

/**
 const resultados = async resul =>{
    try{
        const response = await viagens.get('../Components/viagens.json')
    }
    catch(err)
 }
 */