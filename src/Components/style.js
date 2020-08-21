import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    geral:{
        flex: 1,
        alignItems: 'center',
        margin: 50,
        justifyContent: 'space-evenly',
    },
    texto:{
        fontSize: 19,
        color: '#0066FF',
        alignItems: 'center',
        margin: 5,
    },
    button:{
        borderRadius: 20,
        backgroundColor: 'yellow',
        width: 200,
    },
    image:{
        width: 360,
        height: 800,
    },
    logo:{
        width: 100,
        height: 100,
        alignItems: 'center',
    },
    carregando:{
        width: 170,
        height: 170,
        alignItems: 'center',
    },
    miniLogo:{
        width: 60,
        height: 60,
        alignItems: 'center',
        margin: 5,
    },
    rodape:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 25,
        fontSize: 20,
        color: '#0066FF',
        alignItems: 'center',
    },
    alternativeHeader:{
        fontSize: 30,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    box:{
        backgroundColor: 'white',
    },
    botao:{
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
        marginLeft: 10,
    },
    text:{
        fontSize: 20,
        margin: 5,
        marginLeft: 10,
    },
    headerBox:{
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
})

export default styles