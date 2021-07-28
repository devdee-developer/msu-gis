import {
  Animated,
  Dimensions,
  Image,
  TextInput,
  View,
  SafeAreaView,
  Platform ,
  TouchableOpacity
} from "react-native";
import React, { Component } from "react";

import IconBack from "../../assets/icon_back.png";
import IconSearch from "../../assets/icon_search.png";
import Style from "./Style";


const deviceWidth = Dimensions.get("window").width;
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" ,onFocus:false};
   
  }
  width = new Animated.Value(90);
  animate = () => {
    this.setState({onFocus:true})
    Animated.timing(this.width, {
      toValue: deviceWidth - 30,
      duration: 300
    }).start();
  };
  animateOut = () => {
    this.setState({onFocus:false})
    if (this.state.search.length == 0) {
      Animated.timing(this.width, {
        toValue: 90,
        duration: 300
      }).start();
    }
  };
  onChange = (text) => {
    this.setState({ search: text });
    this.props.onChangeText(text);
  };
  render() {
    const {navigation} = this.props;
    const textInputBackgroundColor = this.width.interpolate({
      inputRange: [90, deviceWidth - 30],
      outputRange: ["#EEEAFD", "#FFFFFF"]
    });
    const textInputBorderColor = this.width.interpolate({
      inputRange: [90, deviceWidth - 30],
      outputRange: ["#EEEAFD", "#7676FF"]
    });
    const headerBackgroundColor = this.width.interpolate({
      inputRange: [90, deviceWidth - 30],
      outputRange: ["#FFFFFF", "#F7F5FC"]
    });
    const headerBorderColor = this.width.interpolate({
      inputRange: [90, deviceWidth - 30],
      outputRange: ["#EEEAFD", "#F7F5FC"]
    });
   
    const animatedTextInputStyle = {
      backgroundColor: textInputBackgroundColor,
      borderColor: textInputBorderColor,
      shadowColor: "#9595F273",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 5
    };
    return (
      <SafeAreaView style={{backgroundColor:'#F7F5FC',paddingTop: Platform.OS === 'android' ? 25 : 0}}>
        <Animated.View style={{ flexDirection:'row',height: 54 ,justifyContent:'space-between',alignItems:'center',borderBottomWidth:1,borderBottomColor:headerBorderColor,backgroundColor:headerBackgroundColor}} >
        {navigation.canGoBack()&&!this.state.onFocus?<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ width: 21.93, height: 17.31 ,marginLeft:15}} source={IconBack} /></TouchableOpacity>:<View></View>}
          <Animated.View
            style={{
              height: 40,
              width: this.width,
              borderRadius: 20,
              borderWidth: 1,
              marginRight: 15,
              ...animatedTextInputStyle
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
                resizeMode: "contain"
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
                borderRadius: 20
              }}
              onChangeText={(text) => this.onChange(text)}
              placeholder={"ค้นหา"}
              placeholderTextColor={"#010979"}
            />
          </Animated.View>
        </Animated.View>
      </SafeAreaView>
    );
  }
}
export default Screen;
