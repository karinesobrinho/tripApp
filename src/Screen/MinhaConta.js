import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { MaterialIcons} from '@expo/vector-icons' 

const MinhaConta = ()=>{
    return(
        <View>
            <Text>MinhaConta</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

MinhaConta.navigationOptions = {
    tabBarIcon:  <MaterialIcons name="person" size={24} color="gray" />
}

export default MinhaConta