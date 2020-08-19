import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView, Button} from 'react-native'
import styles from '../Components/style'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import Header from '../Components/Header'

const Home = ({navigation})=>{
    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}

/*Home.navigationOptions = () => {
    return {
      header: () => false,
} */

Home.navigationOptions = ()=> {
    return {
        tabBarIcon:  <MaterialCommunityIcons name="earth" size={24} color="gray"/>
    }
}

export default Home