import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView,TouchableOpacity} from 'react-native'
import styles from './style'
import { MaterialIcons, Fontisto } from '@expo/vector-icons' 
import { withNavigation } from 'react-navigation'
import { StatusBar } from 'react-native'

const Header = ({navigation})=>{
    return(
        <SafeAreaView style={styles.headerBox} > 
            <StatusBar style={styles.headerBox} />
            <View style={styleHeader.logo} >
                <Image source={require('../images/cvc.png')} style={styles.miniLogo} />
            </View>
            <View style={styleHeader.geral} >
                <TouchableOpacity
                    onPress = {()=> navigation.navigate('Voos')}
                >
                    <MaterialIcons name="airplanemode-active" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=> navigation.navigate('Hospedagens')}
                >
                    <Fontisto name="hotel" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=> navigation.navigate('Pacotes')}
                >
                    <Fontisto name="suitcase" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=> navigation.navigate('Atividades')}
                >
                    <Fontisto name="compass-alt" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styleHeader.titulo} >
                <Text>Voos</Text>                           
                <Text>Hospedagens</Text>
                <Text>Pacotes</Text>
                <Text>Atividades</Text>
            </View>
        </SafeAreaView>
    )
}

const styleHeader = StyleSheet.create({
    geral:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: 18,
    },
    titulo:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 8,
    },
    logo:{
        alignItems:'center',
    },
})

export default withNavigation(Header)