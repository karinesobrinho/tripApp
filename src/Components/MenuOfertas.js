import React from 'react'
import {ScrollView, View,StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import { MaterialIcons, 
    Fontisto, 
    FontAwesome5,
    MaterialCommunityIcons  } from '@expo/vector-icons' 
import HorizontalScroll from 'react-scroll-horizontal'


const MenuOfertas = ()=>{
    return(
        <SafeAreaView style={styles.menuSuperior} >
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity style={styles.container} >
                    <Fontisto name="ticket" size={26} color="black" style={styles.botoes} />
                    <Text style={styles.text}>Promoções</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <MaterialIcons name="airplanemode-active" size={26} color="black" style={styles.botoes} />
                    <Text style={styles.text}>Voos</Text>
                </TouchableOpacity>            
                <TouchableOpacity style={styles.container}>
                    <Fontisto name="hotel" size={26} color="black" style={styles.botoes} />
                    <Text style={styles.text}>Hoteis</Text>
                </TouchableOpacity>            
                <TouchableOpacity style={styles.container}>
                    <Fontisto name="suitcase" size={26} color="black" style={styles.botoes} />
                    <Text style={styles.text}>Pacotes</Text>
                </TouchableOpacity>            
                <TouchableOpacity style={styles.container}>
                    <MaterialCommunityIcons name="calendar-heart" size={26} color="black" style={styles.botoes} />
                    <Text style={styles.text}>Seguros</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Fontisto name="compass-alt" size={26} color="black" style={styles.botoes} />
                    <Text style={styles.text}>Atividades</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <FontAwesome5 name="car" size={26} color="black" style={styles.botoes} />
                    <Text style={styles.text} >Carros</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    menuSuperior:{
        backgroundColor: '#BEBEBE',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    text:{
        fontSize: 18,
        margin: 5,
    },
    direcao:{
        flexDirection: 'row',
    },
    botoes:{
        alignSelf: 'center',
    },
    container:{
        marginHorizontal: 8, 
    },
})

export default MenuOfertas