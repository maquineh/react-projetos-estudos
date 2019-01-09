import React from 'react'
import  {View, Text} from 'react-native'
import Padrao from '../estilos/Padrao'
import If from './If'

function parOuImpar(num){
   /* if(num %2 == 0){
        return <Text style={Padrao.ex}>Par</Text>
    } else {
        return <Text style={Padrao.ex}>Impar</Text>
    }*/
    const v = num % 2 == 0 ? 'Par' : 'Ímpar' 
    return <Text style={Padrao.ex}>{v}</Text>
}

export default props =>
    <View>
        <If test={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={props.numero % 2 > 0}>
            <Text style={Padrao.ex}>Impar</Text>
        </If>
        {/*
            parOuImpar(props.numero)
        */}
        {/*
            props.numero % 2 == 0 
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>

        */}
    </View>