import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    geral:{
        justifyContent: 'center',
        flex: 1,
        //alignItems: 'center',
        margin: 50,
        justifyContent: 'space-around',
    },
    texto:{
        fontSize: 30,
        color: 'blue',
    },
    button:{
        borderRadius: 20,
        backgroundColor: 'yellow',
    },
    image:{
        width: 360,
        height: 700,
        alignItems: 'center',
        marginTop: 10,
    },
    logo:{
        width:100,
        height:100,
    },
    rodape:{
        justifyContent: 'flex-end',
        fontSize: 20,
        color: 'blue',
        alignItems: 'center',
    }
})

export default styles