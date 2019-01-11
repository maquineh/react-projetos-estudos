import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        height: '100%'
    },
    norte:{

    },
    centro:{

    },
    sul:{

    },
    circulo:{
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius:50
    }
})

const Circulo = props => <View style={styles.circulo}></View>