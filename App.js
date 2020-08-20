//tools
import React from 'react'
import {SafeAreaView} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Header from './src/Components/Header'

//telas
import Atividades from './src/Screen/Atividades'
import Contato from './src/Screen/Contato'
import Home from './src/Screen/Home'
import Hospedagens from './src/Screen/Hospedagens'
import MinhaConta from './src/Screen/MinhaConta'
import Notificacoes from './src/Screen/Notificacoes'
import Ofertas from './src/Screen/Ofertas'
import Pacotes from './src/Screen/Pacotes'
import Voos from './src/Screen/Voos'
import LoginPrincipal from './src/Screen/LoginPrincipal'
import LoginCriar from './src/Screen/LoginCriar'
import LoginAcesso from './src/Screen/LoginAcesso'
import Carregando from './src/Screen/Carregando'

//icons
import { Foundation, 
  MaterialIcons, 
  FontAwesome, 
  Ionicons, 
  Fontisto, 
  MaterialCommunityIcons 
} from '@expo/vector-icons' 


/*
menu de baixo
<MaterialCommunityIcons name="earth" size={24} color="black" />
<Foundation name="telephone" size={24} color="black" />
<FontAwesome name="exclamation" size={24} color="black" />
<Ionicons name="ios-notifications" size={24} color="black" />
<MaterialIcons name="person" size={24} color="black" />

menu de cima
 <MaterialIcons name="airplanemode-active" size={24} color="black" />
 <Fontisto name="hotel" size={24} color="black" />
 <Fontisto name="suitcase" size={24} color="black" />
 <Fontisto name="compass-alt" size={24} color="black" />
*/

const navigator = createStackNavigator({
  Carregando: Carregando,
  Login: LoginPrincipal, 
  Criar: LoginCriar,
  Acesso: LoginAcesso,
  Hospedagens: Hospedagens,
  Atividades: Atividades,
  Pacotes:Pacotes,
  Voos: Voos,
  menu: createBottomTabNavigator ({
    Home: Home,
    Contato: Contato,  
    Ofertas: Ofertas,
    Notificacoes: Notificacoes,
    MinhaConta: MinhaConta,
  }),    
  
},{
  initialRouteName:'Carregando',    
  /*defaultNavigationOptions: {
      title: 'Application Name',
      header: ()=> <Header/> ,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#606070',
  },*/
})

export default createAppContainer(navigator)