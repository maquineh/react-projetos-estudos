import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    /*maisUm = () => {
        this.setState({numero: this.state.numero + 1 })
    }*/

    //Como a função mais Um não é uma arrow function a propriedade deve ser instanciando senão irá perder o valor na proxima instanciação do objeto
    /*contructor(props){
        super(props)
        this.state = {...}
        this.maisUm = this.maisUm.bind(this)
    }*/

    maisUm = () => {
        this.setState({numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({numero: 0})
    }

    render(){

        return (
            <View>
                <TouchableHighlight onPress={this.maisUm}/*{() => this.maisUm()}*/ 
                    onLongPress={this.limpar}>
                    <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                </TouchableHighlight>
                <Text>Incrementar/Zerado</Text>
            </View>

        )
    }
}