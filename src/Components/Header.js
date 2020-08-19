import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView,TouchableOpacity} from 'react-native'
import styles from './style'
import { MaterialIcons, Fontisto } from '@expo/vector-icons' 
import { withNavigation } from 'react-navigation'

const Header = ({navigation})=>{
    return(
        <SafeAreaView style={styleHeader.box} > 
            <View style={styleHeader.logo} >
                <Image source={require('../images/cvc.png')} style={styles.miniLogo} />
            </View>
            <View style={styleHeader.geral} >
                <TouchableOpacity
                    onPress = {()=> navigation.navigate('Voos')}
                >
                    <MaterialIcons name="airplanemode-active" size={24} color="black" />
                    <Text>Voos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=> navigation.navigate('Hospedagens')}
                >
                    <Fontisto name="hotel" size={24} color="black" />
                    <Text>Hospedagens</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=> navigation.navigate('Pacotes')}
                >
                    <Fontisto name="suitcase" size={24} color="black" />
                    <Text>Pacotes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=> navigation.navigate('Atividades')}
                >
                    <Fontisto name="compass-alt" size={24} color="black"/>
                    <Text>Atividades</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

/*Header.navigationOptions = () => {
    return {
      header: () => false,
    }
} */

const styleHeader = StyleSheet.create({
    geral:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logo:{
        alignItems:'center',
    },
    box:{
        backgroundColor: 'white',
        shadowColor: 'black',
    },
})

export default withNavigation(Header)