import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Foundation, AntDesign } from '@expo/vector-icons' 
import { SafeAreaView } from 'react-navigation'
import styles from '../Components/style'
import MenuHeader from '../Components/MenuHeader'

const Contato = ()=>{
    return(
        <View>
            <View>
                <MenuHeader title='Entre em contato'/>
            </View>
            <View style={styleContatos.box} >
                <Image source={require('../images/telefone.png')} style={styleContatos.telefone} />
                        <View style={styleContatos.boxside}>
                <Text style={styleContatos.text1} >Vendas (11-3003-9282)</Text>
                <Text style={styleContatos.text2} >De seg a sex das 8h às 22h</Text>
                <Text style={styleContatos.text2} >Sáb das 9h às 21h</Text>
                <Text style={styleContatos.text2} >Dom e feriados das 10h às 15h</Text>
            </View>
            </View>

            <View style={styleContatos.box} >
                <Text style={styleContatos.text3} > Siga nos em </Text>
                <Image source={require('../images/facebook.png')} style={styleContatos.redes} />
                <Image source={require('../images/instagram.png')} style={styleContatos.redes}  />
                <Image source={require('../images/twiter.png')} style={styleContatos.redes}  />
                <Image source={require('../images/youtube.png')}  style={styleContatos.yt} />
            </View>
            <View>
                <TouchableOpacity style={styles.botao} >
                    <AntDesign name="earth"  size={30} color="#0066FF" />
                    <Text style={styles.texto} >ENTRE NO NOSSO SITE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styleContatos = StyleSheet.create({
    box:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        padding:5,
    },
    boxside:{
        backgroundColor: 'white',
        padding: 5,
    },
    text1:{
        justifyContent:'center',
        fontSize: 18,
        marginLeft: 5,
        margin: 2,
    },
    text2:{
        color: 'gray',
        fontSize: 15,
        marginLeft: 5,
        margin: 2,
    },
    text3:{
        fontSize: 20,
        justifyContent:'center',
    },
    telefone:{
        flexDirection:'row',
        width: 100,
        height: 100,
    },
    redes:{
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    yt:{
        height:40,
        width: 58,
        borderRadius: 5,
    },
})

Contato.navigationOptions = {
    tabBarIcon: <Foundation name="telephone" size={24} color="gray" />
}

export default Contato