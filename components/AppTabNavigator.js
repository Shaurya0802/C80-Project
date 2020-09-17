import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExchangeThings from '../screens/ExchangeThings';
import HomeScreen from '../screens/HomeScreen';

export const AppTabNavigator = createBottomTabNavigator({
    ExchangeThings: {
        screen: ExchangeThings,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/Exchange.png')} style={{width: 20, height: 20}} />,
            tabBarLabel: 'Exchange Things'
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/HomeScreen.png')} style={{width: 20, height: 20}} />,
            tabBarLabel: 'Home Screen'
        }
    }
});