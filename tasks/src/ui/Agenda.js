import React, {Component} from 'react'
import {StyleSheet, Text, View, 
        ImageBackground, FlatList,
        TouchableOpacity, Platform,
        AsyncStorage
        } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyle'
import Task from '../componentes/Task'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddTask from './AddTask'
import ActionButton  from 'react-native-action-button'
import axios from 'axios';
import { showError } from '../common';

export default class Agenda extends Component {

    state = {
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false,
    }

    addTask = async () => {
        try{
            await axios.post(`${server}/tasks`, {
                desc: task.desc,
                estimatedAt: task.date
            })

            this.setState({ showAddTask: false }, this.loadTasks)
        }catch(err){
            showError(err)
        }
    }

    componentDidMount = async () => {
        this.loadTasks()
    }

    toggleFilter = () =>{
        this.setState({showDoneTasks: !this.state.showDoneTasks}, 
            this.filterTasks)
    }

    filterTasks = () => {
      let visibleTasks = null
      if (this.state.showDoneTasks){
          visibleTasks = [...this.state.tasks]
      }else{
        const pending = task => task.doneAt === null 
        visibleTasks = this.state.tasks.filter(pending)
      }
      this.setState({visibleTasks})
      AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }
    
    toggleTask = async id => {
        try{
            await axios.put(`${server}/tasks/${id}/toggle`)
            await this.loadTasks()
        }catch(err){

        }
    }

    loadTasks = async () => {
        try{
            const maxDate = moment().format('YYYY-MM-DD 23:59')
            const res = await axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({ tasks: res.data }, this.filterTasks)
        }catch(err){
            showError(err)
        }
    }

    deleteTask = async id => {
        try{
            await axios.delete(`${server}/tasks/${id}`)
            await this.loadTasks()
        }catch(err){
            showError(err)
        }
    }

    render (){
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} onSave={this.addTask} onCancel={() => this.setState({showAddTask: false})} />
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasksContainer}>
                    <FlatList data={this.state.visibleTasks} keyExtractor={item => `${item.id}`} 
                        renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask}  onDelete={this.deleteTask} />} 
                        />
                </View>
                <ActionButton buttonColor={commonStyles.colors.default} onPress={() => {this.setState({showAddTask:true})} }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    background:{
        flex: 3,
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    tasksContainer:{
        flex: 7, 
    },
    iconBar:{
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})