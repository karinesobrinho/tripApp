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
        width:100,
        height:100,
        alignItems: 'center',
    },
    miniLogo:{
        width: 50,
        height: 50,
        alignItems: 'center',
    },
    rodape:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        fontSize: 20,
        color: '#0066FF',
        alignItems: 'center',
    },

})

export default styles