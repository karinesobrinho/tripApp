import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView, Button} from 'react-native'
import styles from '../Components/style'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import Header from '../Components/Header'

const Home = ({navigation})=>{
    return(
        <>
            <View>
                <Header/>
            </View>
            <ScrollView>
                <Image source={require('../images/home.png')} style={homeStyle.image1} />
                <Text style={homeStyle.texto1} >Aproveite as nossas promoções para planejar sua viagem </Text>
                <View>
                    <Text style={homeStyle.texto1} >Encontre o melhor preço para seu voo </Text>
                    <Text style={homeStyle.texto2} > Ver todos </Text>
                </View>
                <View>
                    <Text style={homeStyle.texto1} >Desfrute da sua acomodação a um excelente preço! </Text>
                    <Text style={homeStyle.texto2} > Ver todos </Text>
                </View>
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
        margin: 10,
    },
    texto2:{
        color: 'blue',
        fontSize: 15,
    }

})

Home.navigationOptions = ()=> {
    return {
        tabBarIcon:  <MaterialCommunityIcons name="earth" size={24} color="gray"/>
    }
}


export default Home