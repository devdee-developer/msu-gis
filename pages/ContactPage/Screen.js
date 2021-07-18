import React, { Component } from 'react';
import { Text } from 'react-native';
import Style from './Style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonCustomComponent from '../../components/ButtonCustomComponent/Screen';
class Screen extends Component {
  render() {
    return (
      <ButtonCustomComponent title={this.props.title}></ButtonCustomComponent>
    );
  }
}
export default Screen;