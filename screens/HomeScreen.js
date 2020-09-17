import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import { ListItem } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            requestedThingsList: []
        } 
        this.requesteRef = null;
    }

    getRequestedThingsList = () => {
        this.requesteRef = db.collection('requested_things')
        .onSnapshot((snapshot) => {
            var requestedThingsList = snapshot.docs.map((doc) => doc.data());
            
            this.setState({
                requestedThingsList: requestedThingsList
            })
        });
    }

    componentDidMount() {
        this.getRequestedThingsList();
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({item, i}) => {
        return (
            <ListItem 
                key={i}
                title={item.thing_name}
                subtitle={item.reason_to_request}
                titleStyle={{color: '#000', fontWeight: 'bold'}}
                rightElement={
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color: '#fff'}}>Exchange</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MyHeader title="Exhange Things" />
                {this.state.requestedThingsList.length === 0 ? (
                    <View style={{flex: 1, fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 20}}>List of all requests</Text>
                    </View>
                ): (
                    <FlatList 
                        keyExtractor={this.keyExtractor}
                        data={this.state.requestedThingsList}
                        renderItem={this.renderItem}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff5722',
        shadowOffset: {
            width: 0,
            height: 8
        }
    }
});