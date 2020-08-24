import React from 'react'
import {ScrollView, View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import { FontAwesome, 
    Foundation, 
    MaterialIcons, 
    Ionicons, 
    Fontisto, 
    FontAwesome5,
    MaterialCommunityIcons  } from '@expo/vector-icons' 
    import MenuHeader from '../Components/MenuHeader'
//promocoes, voo, hoteis, pacotes, seguros, atividades e carros

const Ofertas = ()=>{
    return(
    <View>
        <View>
            <MenuHeader title='Ofertas'/>            
        </View>
        <View style={styles.menuSuperior} >
            <ScrollView>
                <TouchableOpacity>
                    <Fontisto name="ticket" size={26} color="black" />
                    <Text style={styles.text}>Promoções</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="airplanemode-active" size={26} color="black" />
                    <Text style={styles.text}>Voos</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <Fontisto name="hotel" size={26} color="black" />
                    <Text style={styles.text}>Hoteis</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <Fontisto name="suitcase" size={26} color="black" />
                    <Text style={styles.text}>Pacotes</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <MaterialCommunityIcons name="calendar-heart" size={26} color="black" />
                    <Text style={styles.text}>Seguros</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="compass-alt" size={26} color="black" />
                    <Text style={styles.text}>Atividades</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="car" size={26} color="black" />
                    <Text style={styles.text} >Carros</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Fontisto name="ticket" size={26} color="black" />
                    <Text style={styles.text}>Promoções</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="airplanemode-active" size={26} color="black" />
                    <Text style={styles.text}>Voos</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <Fontisto name="hotel" size={26} color="black" />
                    <Text style={styles.text}>Hoteis</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <Fontisto name="suitcase" size={26} color="black" />
                    <Text style={styles.text}>Pacotes</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <MaterialCommunityIcons name="calendar-heart" size={26} color="black" />
                    <Text style={styles.text}>Seguros</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="compass-alt" size={26} color="black" />
                    <Text style={styles.text}>Atividades</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="car" size={26} color="black" />
                    <Text style={styles.text} >Carros</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="ticket" size={26} color="black" />
                    <Text style={styles.text}>Promoções</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="airplanemode-active" size={26} color="black" />
                    <Text style={styles.text}>Voos</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <Fontisto name="hotel" size={26} color="black" />
                    <Text style={styles.text}>Hoteis</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <Fontisto name="suitcase" size={26} color="black" />
                    <Text style={styles.text}>Pacotes</Text>
                </TouchableOpacity>            
                <TouchableOpacity>
                    <MaterialCommunityIcons name="calendar-heart" size={26} color="black" />
                    <Text style={styles.text}>Seguros</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="compass-alt" size={26} color="black" />
                    <Text style={styles.text}>Atividades</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="car" size={26} color="black" />
                    <Text style={styles.text} >Carros</Text>
                </TouchableOpacity>
            </ScrollView>    
        </View>
    </View>
    )
}

Ofertas.navigationOptions = {
    tabBarIcon:  <FontAwesome name="exclamation" size={24} color="gray" />
 }

const styles = StyleSheet.create({
    menuSuperior:{
        flexDirection: 'row',
        backgroundColor: '#A9A9A9',
        
    },
    text:{
        fontSize: 20,
        margin: 5,
    },
    direcao:{
        flexDirection: 'row'
    }
})

export default Ofertas