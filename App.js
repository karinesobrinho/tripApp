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

//icons
import { Foundation, MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons' 
//<Foundation name="telephone" size={24} color="black" />
//<FontAwesome name="exclamation" size={24} color="black" />
//<Ionicons name="ios-notifications" size={24} color="black" />
//<MaterialIcons name="person" size={24} color="black" />
//<MaterialIcons name="airplanemode-active" size={24} color="black" />

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
