import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { MaterialIcons, Fontisto } from '@expo/vector-icons' 

const Cards = ({data})=> {
    //console.log(data)
    const { titulo= '', partida='', valor='', image='', icon='' } = { ...data}
    const icone = ({data})=>{
        if (icon == 'hotel'){
            return <Fontisto name="hotel" size={40} color="gray" />
        } else{
            return <MaterialIcons name="airplanemode-active" size={40} color="gray" />
        }
    }

    return(
    <View style={cardStyle.row} >
        <TouchableOpacity style={cardStyle.box}
            onPress={()=> console.log(data)}
        >
            <Text style={cardStyle.textTitulo} >{titulo}</Text>
            <Text style={cardStyle.textPartida} >{partida}</Text>
            <Text style={cardStyle.textPadrao} >A partir de</Text>
            <Text style={cardStyle.textvalor} >{valor}</Text>
        </TouchableOpacity>
    </View>       
    )
}

const cardStyle = StyleSheet.create({
    imagem:{
        height: 100,
        width: 100,
    },
    box:{
        backgroundColor: 'white',
        width: 340,
        height: 200,
        padding: 5,
        margin: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    row:{
        flexDirection: 'row',
    },
    textTitulo:{
        fontSize: 20,
        color: 'gray',
    },
    textPartida:{
        fontSize: 15,
        color: 'gray',
    },
    textPadrao:{
        fontSize: 15,
        color: 'gray',
    },
    textvalor:{
        fontSize: 20,
        color: 'gray',
    }
})

export default Cards