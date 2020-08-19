import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView,TouchableOpacity} from 'react-native'
import styles from './style'
import { MaterialIcons, Fontisto } from '@expo/vector-icons' 
import { withNavigation } from 'react-navigation'

const Header = ({navigation})=>{
    return(
        <View style={styleHeader.geral} >
            <Image source={require('../images/cvc.png')} style={styles.miniLogo} />
            <TouchableOpacity
                onPress = {()=> navigation.navigate('Voos')}
            >
                <Text>Voos</Text>
                <MaterialIcons name="airplanemode-active" size={24} color="black" />
            </TouchableOpacity>
             <TouchableOpacity
                onPress = {()=> navigation.navigate('Hospedagens')}
            >
                <Text>Hospedagens</Text>
                <Fontisto name="hotel" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {()=> navigation.navigate('Pacotes')}
            >
                <Text>Pacotes</Text>
                <Fontisto name="suitcase" size={24} color="black" />
            </TouchableOpacity>
             <TouchableOpacity
                onPress = {()=> navigation.navigate('Atividades')}
            >
                <Text>Atividades</Text>
                <Fontisto name="compass-alt" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styleHeader = StyleSheet.create({
    geral:{
        flexDirection: 'row',
        
    }
})

export default withNavigation(Header)