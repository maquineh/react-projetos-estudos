import React from 'react'
import {View, Text} from 'react-native'
import Padrao from '../estilos/Padrao'

//export default function (props){
//    return <Text>{props.texto}</Text>
//}

//export default props => 
//    <Text>{props.texto}</Text>

export default props => 
    <View>
        <Text style={[Padrao.ex]}>Texto 1: {props.texto}</Text>
        <Text style={[Padrao.ex]}>Texto 2: {props.texto}</Text>
    </View>