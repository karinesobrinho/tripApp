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

const navigator = createStackNavigator({
  //telas de login
  Carregando: Carregando,
  Login: LoginPrincipal, 
  Criar: LoginCriar,
  Acesso: LoginAcesso,
  //menu de cima
  Hospedagens: Hospedagens,
  Atividades: Atividades,
  Pacotes:Pacotes,
  Voos: Voos,
  menu: createBottomTabNavigator ({
    Iniciar: Home,
    Contato: Contato,  
    Ofertas: Ofertas,
    Notificações: Notificacoes,
    'Minha conta': MinhaConta,
  }, {
    tabBarOptions: {
      activeTintColor: '#009999',
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: 'white',
        height: 70,
        borderBottom: 12,
        borderColor:'white',
        paddingVertical:4,
        paddingRight: 5,
        justifyContent: 'space-between',
      },
    }
  }),    
},{
  initialRouteName:'Carregando',    
  defaultNavigationOptions: {
      header: ()=> false,
  },
})

export default createAppContainer(navigator)