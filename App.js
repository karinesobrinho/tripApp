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
import Index from './src/Screen/Index'

//tools
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

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

export default createAppContainer(navigator)

/*
, {
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    title: 'tripApp'
  } 
  
  
  Hospedagens: Hospedagens,
  Atividades: Atividades,
  Pacotes:Pacotes,
  Voos: Voos,
}, {
  initialRouteName: 'Home',
}
  
  
  */