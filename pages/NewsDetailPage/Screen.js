import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

import CalendarIcon from "../../assets/calendar_icon.png";
import Style from "./Style";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const ratio = deviceWidth / 640;
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { detail } = this.props.route.params;
    this.setState({ ...detail });
  }

  render() {
    const { header, publicDate, banner } = this.state;
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View
            style={{
              padding: 15,
              paddingBottom:0
            }}
          >
            <Text style={Style.titleLabel}>{header}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 15,
              marginHorizontal:15
            }}
          >
            <View style={Style.date}>
              <Image source={CalendarIcon} style={Style.dateIcon} />
              <Text style={Style.dateLabel}>{publicDate}</Text>
            </View>
            <TouchableOpacity
              style={{
                width: 91,
                height: 40,
                backgroundColor: "#7676FF",
                borderRadius: 7,
                flexDirection:'row',
                alignItems:'center',

              }}
              onPress={() => {}}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 16 }}>แชร์</Text>
            </TouchableOpacity>
          </View>
          {banner && (
            <Image
              source={{ uri: banner }}
              style={{
                height: 420 * ratio,
                width: deviceWidth,
                resizeMode: "cover",
                marginTop: 10,
              }}
            />
          )}
          <View style={{borderWidth:1,width:deviceWidth*0.9,margin:15,borderColor:'#3B3D48'}}></View>
        </ScrollView>
      </View>
    );
  }
}
export default Screen;
