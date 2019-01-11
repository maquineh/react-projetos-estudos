import React from 'react'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, {MegaSena} from './components/Multi'
import Contador from "./components/Contador";
import Plataformas from "./components/Plataformas"
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import {Avo} from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'

export default createDrawerNavigator({
    ListaFlex:{
        screen: ListaFlex,
        navigationOptions: {title: 'Lista Flex'}
    },
    TextoSincronizado:{
        screen: TextoSincronizado,
        navigationOptions: {title: 'Texto Sincronizado'}
    },
    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva'/>
    },
    Evento:{
        screen: Evento
    },
    ValidarProps:{
        screen: () => <ValidarProps  ano=''/>
    },
    Plataformas:{
        screen: Plataformas
    },
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