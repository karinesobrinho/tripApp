//tools
import React from 'react'
import {SafeAreaView} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

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
  App: createBottomTabNavigator ({
    Home: Home,
    Contato: Contato,  
    Ofertas: Ofertas,
    Notificacoes: Notificacoes,
    MinhaConta: MinhaConta,
  }),    
  Carregando: Carregando,
  Login: LoginPrincipal,
  Hospedagens: Hospedagens,
  Atividades: Atividades,
  Pacotes:Pacotes,
  Voos: Voos,
  Criar: LoginCriar,
  Acesso: LoginAcesso,
},{
  initialRouteName:'Carregando'
})

export default createAppContainer(navigator)

/*
const navigator = createStackNavigator({
  MenudeBaixo: createBottomTabNavigator ({
    Home: Home,
    Contato: Contato,  
    Ofertas: Ofertas,
    Notificacoes: Notificacoes,
    MinhaConta: MinhaConta,
  }),
  Hospedagens: Hospedagens,
  Atividades: Atividades,
  Pacotes:Pacotes,
  Voos: Voos,
})
*/