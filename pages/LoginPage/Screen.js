import React, { Component } from 'react';
import { Text,Button  } from 'react-native';
import Style from './Style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
class Screen extends Component {
  render() {
    return (
      <Button
      title="back to splash screen"
      onPress={() =>
        this.props.navigation.navigate('SplashScreen')
      }
    />
    );
  }
}
export default Screen;