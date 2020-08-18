import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView, Button} from 'react-native'
import styles from '../Components/style'
import { MaterialCommunityIcons } from '@expo/vector-icons' 

const Home = ({navigation})=>{
    return(
        <View>
            <Text>Home</Text>
            <Button
                title ='Voos'
                onPress = {()=> navigation.navigate('Voos')}
            />
             <Button
                title ='Hospedagens'
                onPress = {()=> navigation.navigate('Hospedagens')}
            />
             <Button
                title ='Pacotes'
                onPress = {()=> navigation.navigate('Pacotes')}
            />
             <Button
                title ='Atividades'
                onPress = {()=> navigation.navigate('Atividades')}
            />
        </View>
    )
}

Home.navigationOptions = {
   tabBarIcon:  <MaterialCommunityIcons name="earth" size={24} color="red"/>
}

export default Home