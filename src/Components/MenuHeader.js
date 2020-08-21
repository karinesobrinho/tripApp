import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const MenuHeader = ({title})=>{
    return(
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default MenuHeader