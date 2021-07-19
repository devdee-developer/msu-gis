import React, { Component } from 'react';

import Style from './Style';
import { Text } from 'react-native';

class Screen extends Component {
  render() {
    return (
      <Text style={Style.textApp}>News Screen</Text>
    );
  }
}
export default Screen;