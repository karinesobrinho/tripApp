import React from 'react'
import {Text, StyleSheet, TouchableOpacity,View} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { withNavigation } from 'react-navigation';

const MenuHeader = ({title, navigation})=>{
    return(
        <View style={styles.headerBox} >
            <TouchableOpacity style={styles.icon}
                    onPress={()=> navigation.navigate('Iniciar')}          
                >
                    <AntDesign name="left" size={24} color="black"  />            
            </TouchableOpacity>            
            <Text style={styles.text} >{title}</Text>
        </View>            
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        alignSelf: 'center',
        margin: 30,
        justifyContent: 'center',
    },
    headerBox:{        
        //alignItems: 'center',
        flexDirection: 'row',
        //justifyContent: 'center',
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
    icon: {
        //position: 'absolute',
        alignSelf: 'center',
        margin: 8,
    }
})

export default withNavigation(MenuHeader)