import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'

const Cards = ({data})=> {
    console.log(data)
    //console.log(props.data.titulo)
    //const titulos = data['titulo']
    const { titulo= '', partida='' } = { ...data}
    return(
    <View>
        <TouchableOpacity>
            <Text>{titulo}{partida} </Text>
        </TouchableOpacity>
    </View>       
    )
}

const cardStyle = StyleSheet.create({})

export default Cards