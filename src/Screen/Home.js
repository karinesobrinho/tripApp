import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView, Button} from 'react-native'
import styles from '../Components/style'

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

Home.navigationOptions = () => {
    return {
      header: ()=>
       <Image source={require('../images/cvc.png')} style={styles.miniLogo}/>,
    }
}


export default Home