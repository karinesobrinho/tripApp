import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { MaterialIcons, Fontisto } from '@expo/vector-icons' 

const Cards = ({data})=> {
    console.log(data)
    const { titulo= '', partida='', valor='', image='', icon='' } = { ...data.item}
    const icone = () => {
        if (icon == 'hotel'){
            return <Fontisto name="hotel" size={40} color="gray" />
        } else{
            return <MaterialIcons name="airplanemode-active" size={40} color="gray" />
        }
    }

    return(
    <View style={cardStyle.box}>
        <TouchableOpacity
            onPress={()=> console.log(data)}
        >
            <Image
                style={cardStyle.imagem}
                source={{
                uri: image,
                }}
            />
            <Text style={cardStyle.textTitulo} >{titulo}</Text>
            <Text style={cardStyle.textPartida} >{partida}</Text>
           <View style={cardStyle.row} >
                {icone()} 
                <View>
                    <Text style={cardStyle.textPadrao} >A partir de</Text>
                    <Text style={cardStyle.textvalor} >{valor}</Text> 
                </View>
           </View>
        </TouchableOpacity>
    </View>       
    )
}

const cardStyle = StyleSheet.create({
    imagem:{
        height: 190,
        width: 340,
        opacity: 0.8,
    },
    box:{
        backgroundColor: 'white',
        width: 340,
        height: 250,
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
    textTitulo:{
        fontSize: 25,
        color: 'white',
        marginTop: -55,
        paddingLeft: 5,
    },
    textPartida:{
        fontSize: 15,
        color: 'white',
        marginTop: 0,
        paddingLeft: 5,
    },
    textPadrao:{
        fontSize: 15,
        color: 'gray',
        paddingLeft: 5,

    },
    textvalor:{
        fontSize: 20,
        color: 'gray',
        paddingLeft: 5,
    },
    row:{
        flexDirection: 'row',
        margin:5,
    }
})

export default Cards