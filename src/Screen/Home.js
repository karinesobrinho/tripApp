import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView, Button} from 'react-native'
import styles from '../Components/style'

const Home = ()=>{
    return(
        <View>
            <Text>Home</Text>
           
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