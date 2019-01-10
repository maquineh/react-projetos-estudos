import React from 'react'
import {View, Button, Alert, ToastAndroid, Platform} from 'react-native'


export default props => {
    
    const notificar = msg => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informação', msg)
        }
    }

    return (
        <Button title='Parabens?' onPress={() => notificar('Parabéns')}></Button>
    )
}

