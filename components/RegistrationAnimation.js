import React from 'react';
import LottieView from 'lottie-react-native';

export default class RegistrationAnimation extends React.Component {
    render() {
        return <LottieView source={require('../assets/11067-registration-animation.json')} style={{width: "100%"}} autoPlay loop/>
    }    
}