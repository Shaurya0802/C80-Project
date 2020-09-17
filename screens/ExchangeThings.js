import React from 'react';
import {StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert, View, Text} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class ExchangeThings extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            thingName: '',
            reasonToRequest: ''
        }
    }

    addRequest = (thingName, reasonToRequest) => {
        var userId = this.state.userId;
        var randomRequestId = this.createUniqueId();

        db.collection('requested_things').add({
            'user_id': userId,
            'thing_name': thingName,
            'reason_to_request': reasonToRequest,
            'request_id': randomRequestId
        });

        this.setState({
            reasonToRequest: '',
            thingName: ''
        });

        return Alert.alert('Thing requested successfully');
    }

    createUniqueId() {
        var rand = Math.random().toString(36);

        return rand.substring(7);    
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <MyHeader title="Request Things" />
                <KeyboardAvoidingView style={styles.keyBoardStyle} behavior="padding" enabled>
                <TextInput 
                        placeholder="Enter thing name" 
                        style={styles.formTextInput}
                        multiline
                        onChangeText={e => {this.setState({thingName: e})}}
                        value={this.state.thingName}
                    />

                    <TextInput 
                        placeholder="Enter Reason to Request" 
                        style={styles.formTextInput}
                        multiline numberOfLines={8}
                        onChangeText={e => {this.setState({reasonToRequest: e})}}
                        value={this.state.reasonToRequest}
                    />

                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => {
                            this.addRequest(this.state.thingName, this.state.reasonToRequest)
                        }}
                    >
                        <Text>Request Book</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formTextInput: {
        width: '75%',
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 20
    },
    button: {
        width: '75%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#ff5722',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20
    },
    keyBoardStyle : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});