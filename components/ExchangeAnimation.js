import React from 'react';
import LottieView from 'lottie-react-native';

export default class ExchangeAnimation extends React.Component {
    render() {
        return <LottieView source={require('../assets/23685-server-exchange.json')} style={{width: "55%"}} autoPlay loop/>
    }    
}