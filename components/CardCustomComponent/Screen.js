import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

import ArrowRight from "../../assets/arrow-r-yellow.png";
import Style from "./Style";

class Screen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {cardStyle,thumbnail,text,footer,onPress}= this.props;
    const customStyle = {...cardStyle}
    return (
      <TouchableOpacity style={[Style.card,customStyle]} onPress={onPress}>
        <View style={{ width: 115 }}>
          <View style={{ flex: 4, padding: 5 }}>
            <Image
              source={{ uri: thumbnail }}
              style={Style.cardImg}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={Style.cardBody}>
          <View style={{ flex: 3 }}>
            <Text numberOfLines={3} style={{ fontSize: 16, color: "#0D0E12" }}>
              {text}
            </Text>
          </View>
          <View style={Style.cardFooter}>
            <View style={Style.buttonDetail}>
              <Text style={Style.buttonDetailLabel}>รายละเอียด</Text>
              <Image source={ArrowRight} style={Style.buttonDetailIcon} />
            </View>
            {footer}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default Screen;
