import React from 'react'
import {StyleSheet, Text, 
        View, TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyle'


export default props => {
   let check = null
   if (props.doneAt !== null){
       check = ( 
           <View style = {styles.done}>
                <Icon name='check' size={30} color={commonStyles.colors.secondary} />
           </View>
       )
   } else {
       check = <View style={styles.pending}/>
   }

   const descStyle = props.doneAt !== null ? 
        {textDecorationLine: 'line-through' } : {}

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                <View style={styles.checkContainer}>{check}</View>
            </TouchableWithoutFeedback>
            <View style={styles.descContainer}>
                <Text style={[styles.description, descStyle]}>
                   {props.desc}
                </Text>
                <Text style={styles.date}>{moment(props.estimatedAt).locale('pt-br ').format('ddd, D [de] MMMM')}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    checkContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    descContainer:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '80%',
    },
    pending: {
        borderWidth: 1,
        height: 30,
        width: 30,
        borderRadius: 20,
        borderColor: '#555',
    },
    done:{
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center',

    },
    description:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 20,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 15,
    }
})