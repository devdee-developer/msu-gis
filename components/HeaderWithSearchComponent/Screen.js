import {
  Animated,
  Dimensions,
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

import IconBack from "../../assets/icon_back.png";
import IconSearch from "../../assets/icon_search.png";
import Style from "./Style";

const deviceWidth = Dimensions.get("window").width;
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = { onFocus: false ,hideBack:this.props.hideBack?this.props.hideBack:false};
  }
  width = new Animated.Value(90);
  animate = () => {
    this.setState({ onFocus: true });
    Animated.timing(this.width, {
      toValue: deviceWidth - 65,
      duration: 200,
    }).start();
    // this.props.onSearchFocus();
  };
  animateOut = () => {
    if (this.props.value.length == 0) {
      this.setState({ onFocus: false });
      Animated.timing(this.width, {
        toValue: 90,
        duration: 250,
      }).start();
      this.props.onSearchCancel();
      // this.props.onSearchBlur();
    }
  };
  cancel = () => {
    Keyboard.dismiss();
    this.textInput.clear();
    this.setState({ onFocus: false });
    Animated.timing(this.width, {
      toValue: 90,
      duration: 250,
    }).start();
    this.props.onSearchCancel();
  };
  onChange = (text) => {
    this.props.onChangeText(text);
  };
  render() {
    const { navigation } = this.props;
    const textInputBackgroundColor = this.width.interpolate({
      inputRange: [90, deviceWidth - 65],
      outputRange: ["#EEEAFD", "#FFFFFF"],
    });
    const textInputBorderColor = this.width.interpolate({
      inputRange: [90, deviceWidth - 65],
      outputRange: ["#EEEAFD", "#7676FF"],
    });
    const headerBackgroundColor = this.width.interpolate({
      inputRange: [90, deviceWidth - 65],
      outputRange: ["#FFFFFF", "#F7F5FC"],
    });
    const headerBorderColor = this.width.interpolate({
      inputRange: [90, deviceWidth - 65],
      outputRange: ["#EEEAFD", "#F7F5FC"],
    });
    const animatedContainerStyle = {
      borderBottomColor: headerBorderColor,
      backgroundColor: headerBackgroundColor,
      zIndex: 2,
    };
    const animatedTextInputStyle = {
      backgroundColor: textInputBackgroundColor,
      borderColor: textInputBorderColor,
      shadowColor: "#9595F273",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 5,
    };
    return (
      <>
        <Animated.View style={animatedContainerStyle}>
          <StatusBar
            barStyle={Platform.OS === "android" ? "default" : "dark-content"}
          />
          <SafeAreaView
            style={{ paddingTop: Platform.OS === "android" ? 0 : 0 }}
          >
            <Animated.View style={[Style.container, animatedContainerStyle]}>
              {navigation.canGoBack()&& !this.state.hideBack &&
              !this.state.onFocus &&
              !this.state.onFocus ? (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image style={Style.back} source={IconBack} />
                </TouchableOpacity>
              ) : (
                <View style={Style.back}></View>
              )}
              {this.props.title && !this.state.onFocus && (
                <View style={{ position: "absolute",width:deviceWidth,alignItems:"center",justifyContent:"center" }}>
                  <Text
                    style={{
                      fontSize: 23,
                      color: "#010979",
                      fontWeight:'bold'
                    }}
                  >
                    {this.props.title}
                  </Text>
                </View>
              )}
              {this.state.onFocus && (
                <TouchableOpacity
                  style={{ position: "absolute" }}
                  onPress={() => this.cancel()}
                >
                  <Image style={Style.back} source={IconBack} />
                </TouchableOpacity>
              )}

              <Animated.View
                style={{
                  height: 40,
                  width: this.width,
                  borderRadius: 20,
                  borderWidth: 1,
                  marginRight: 15,
                  ...animatedTextInputStyle,
                }}
              >
                <Image source={IconSearch} style={Style.iconSearch} />
                <TextInput
                  ref={(input) => {
                    this.textInput = input;
                  }}
                  onFocus={() => this.animate()}
                  onBlur={() => this.animateOut()}
                  style={Style.textInputSearch}
                  onChangeText={(text) => this.onChange(text)}
                  placeholder={"ค้นหา"}
                  placeholderTextColor={"#010979"}
                />
              </Animated.View>
            </Animated.View>
          </SafeAreaView>
        </Animated.View>
        {this.state.onFocus && (
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "#F7F5FC", zIndex: 1 },
            ]}
          >
            <SafeAreaView
              style={{ paddingTop: Platform.OS === "android" ? 0 : 0 }}
            >
              <ScrollView>
                <Text
                  style={{
                    color: "#010979",
                    fontSize: 18,
                    marginTop: 75,
                    marginBottom: 25,
                    marginHorizontal: 20,
                    zIndex: 2,
                  }}
                >
                  ตรงกับคำที่ค้นหา {this.props.data.length} รายการ
                </Text>

                {this.props.data.map(this.props.renderItem)}
              </ScrollView>
            </SafeAreaView>
          </View>
        )}
      </>
    );
  }
}
export default Screen;
