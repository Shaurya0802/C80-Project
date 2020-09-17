import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {screen:LoginScreen},
  Drawer: {screen:AppDrawerNavigator}
});

const AppContainer = createAppContainer(SwitchNavigator);