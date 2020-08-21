import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView, Button} from 'react-native'
import styles from '../Components/style'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import Header from '../Components/Header'

const Home = ({navigation})=>{
    return(
        <SafeAreaView>
        <View>
            <Header/>
        </View>
        <ScrollView>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
            <Text styles={styles.texto} >Home</Text>
        </ScrollView>
    </SafeAreaView>
    )
}

Home.navigationOptions = ()=> {
    return {
        tabBarIcon:  <MaterialCommunityIcons name="earth" size={24} color="gray"/>
    }
}


export default Home