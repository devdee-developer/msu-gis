import React, { Component } from 'react';
import { Text,TouchableOpacity } from 'react-native';
import Style from './Style';

class Screen extends Component {
  render() {
    return (
      <TouchableOpacity  style={Style.button} >
          <Text>{this.props.title}</Text>
        </TouchableOpacity>
    );
  }
}
export default Screen;