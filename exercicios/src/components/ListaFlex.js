import React, {Component} from 'react'
import {View, Text, ScrollView, FlatList} from 'react-native'

const alunos =[
    {id: 1, nome: 'João', nota: 9.7 },
    {id: 2, nome: 'Ana', nota: 9.1 },
    {id: 3, nome: 'Bia', nota: 5.4 },
    {id: 4, nome: 'Cláudia', nota: 7.6 },
    {id: 5, nome: 'Roberto', nota: 6.8 },
    {id: 6, nome: 'Rafael', nota: 9.9 },
    {id: 7, nome: 'Rebeca', nota: 10.0 },
    {id: 8, nome: 'Guilherme', nota: 8.8 },
    {id: 9, nome: 'Tobias', nota: 8.8 },
    {id: 10, nome: 'Timoteo', nota: 8.4 },
    {id: 11, nome: 'João', nota: 9.7 },
    {id: 12, nome: 'Ana', nota: 9.1 },
    {id: 13, nome: 'Bia', nota: 5.4 },
    {id: 14, nome: 'Cláudia', nota: 7.6 },
    {id: 15, nome: 'Roberto', nota: 6.8 },
    {id: 16, nome: 'Rafael', nota: 9.9 },
    {id: 17, nome: 'Rebeca', nota: 10.0 },
    {id: 18, nome: 'Guilherme', nota: 8.8 },
    {id: 19, nome: 'Tobias', nota: 8.8 }
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 80,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    alignItems: 'center',
    //justifyContent: 'space-around',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'space-around'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Id: {props.id}</Text>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {7
        return <Aluno { ...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} 
                keyExtractor={(_,index) => index.toString()}></FlatList>
        </ScrollView>
    )
}

