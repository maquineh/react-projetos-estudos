import React from 'react'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, {MegaSena} from './components/Multi'
import Contador from "./components/Contador";

export default createDrawerNavigator({
    Contador:{
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {title: 'MegaSena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Native'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={26}/>,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto = 'Teste'/>
    }

}, { drawerWidth: 300 })