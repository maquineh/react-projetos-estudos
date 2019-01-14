import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyle'

export default class Agenda extends Component {
    render (){
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{Hoje}</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br')}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

