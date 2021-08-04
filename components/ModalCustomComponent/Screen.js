import React, { Component } from "react";

import Style from "./Style";
import { View } from "react-native";

class Screen extends Component {
  render() {
    return (
      <View style={Style.containerBgModal}>
        <View style={Style.containerModal}>{this.props.view}</View>
      </View>
    );
  }
}
export default Screen;
