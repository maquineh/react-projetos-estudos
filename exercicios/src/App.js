import React from 'react'
import {View, StyleSheet} from 'react-native'
import Simples from './components/Simples.js'
import ParImpar from './components/ParImpar.js'
import {Inverter, MegaSena} from './components/Multi'
export default class App extends React.Component {
  render(){
      return (
        <View style={styles.container}>
              <Simples texto="Testando"/>
              <ParImpar numero={28}/>
              <Inverter texto='React Nativo'/>
              <MegaSena numeros={6}/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})