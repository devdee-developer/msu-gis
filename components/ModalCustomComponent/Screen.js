import React, { Component } from "react";

import Style from "./Style";
import { View } from "react-native";

// Example
// <Modal Visible={true} Style={{}}>
//   <View></View>
// </Modal>

class Screen extends Component {
  render() {
    return (
      <>
        {this.props.Visible ? (
          <View style={Style.containerBgModal}>
            <View style={[Style.containerModal, this.props.Style]}>
              {this.props.children}
            </View>
          </View>
        ) : (
          <></>
        )}
      </>
    );
  }
}
{
}
export default Screen;
