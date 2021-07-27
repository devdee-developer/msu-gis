import { Animated, Dimensions, Image, Text, TextInput } from "react-native";
import React, { Component } from "react";

import IconBack from "../../assets/icon_back.png";
import IconSearch from "../../assets/icon_search.png";
import Style from "./Style";

const deviceWidth = Dimensions.get("window").width;
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = { search: ""};
  }
  width = new Animated.Value(90);
  animate = () => {
    Animated.timing(this.width, {
      toValue: deviceWidth - 30,
      duration: 300,
    }).start();
  };
  animateOut = () => {
    if (this.state.search.length == 0) {
      Animated.timing(this.width, {
        toValue: 90,
        duration: 300,
      }).start();
    }
  };
  onChange = (text) => {
    this.setState({ search: text });
  };
  render() {
    const backgroundColor = this.width.interpolate({
      inputRange: [90, 300],
      outputRange: ["#EEEAFD", "#FFFFFF"],
    });
    const borderColor = this.width.interpolate({
      inputRange: [90, 300],
      outputRange: ["#EEEAFD", "#7676FF"],
    });
    const animatedStyle = {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      shadowColor: "#9595F273",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 5,
    };
    return (
      <Animated.View
        style={{
          alignSelf: "flex-end",
          height: 40,
          width: this.width,
          borderRadius: 20,
          borderWidth: 1,
          marginRight: 15,
          ...animatedStyle,
        }}
      >
        <Image
          source={IconSearch}
          style={{
            position: "absolute",
            height: 15.79,
            width: 15.35,
            left: 15,
            top: 12.73,
            resizeMode: "contain",
          }}
        />
        <TextInput
          onFocus={() => this.animate()}
          onBlur={() => this.animateOut()}
          style={{
            paddingLeft: 40,
            paddingRight: 15,
            textAlign: "left",
            height: 40,
            borderRadius: 20,
          }}
          onChangeText={(text) => this.onChange(text)}
          placeholder={'ค้นหา'}
          placeholderTextColor={"#010979"}
        />
        {/* <Text style={{position:'absolute',right:15,top: 9,color:'#010979',fontSize:16}}>
          ค้นหา
        </Text> */}
      </Animated.View>
    );
  }
}
export default Screen;
