import React, { Component } from 'react';
import { Text } from 'react-native';
import Style from './Style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
class Screen extends Component {
  render() {
    return (
      <Text style={Style.textApp}>Home Screen</Text>
    );
  }
}
export default Screen;