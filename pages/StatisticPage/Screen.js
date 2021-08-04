import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

import DataImage from "../../assets/statistic_icon_data.png";
import { Entypo } from '@expo/vector-icons';
import HeartImage from "../../assets/statistic_icon_heart.png";
import Style from "./Style";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
class Screen extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View
          style={{
            height: 112,
            backgroundColor: "#010979",
            justifyContent: "center",
            alignItems: "center",
            padding: 18,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems:'center',
              height: 40,
              width: deviceWidth - 36,
            }}
          >
            <Image
              source={DataImage}
              style={{
                width: 22.65,
                height: 19.24,
                marginRight: 10,
              }}
              resizeMode={"contain"}
            />
            <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
              กรุณา เลือกดูข้อมูลสถิติที่ท่านต้องการ
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              backgroundColor: "#FFFFFF",
              height: 40,
              width: deviceWidth - 36,
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
            }}
            activeOpacity={0.8}
        onPress={()=>alert(1)}
          >
            <Text style={{ color: "#010979", fontSize: 16 }}>
              ผลประเมินพฤติกรรมสุขภาพ (ภาพรวมทั้งหมด)
            </Text>
            <Entypo  name="chevron-down" size={24} color="#010979"  />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#E4E1F0",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={HeartImage}
              style={{
                width: 27,
                height: 30.3,
                marginHorizontal: 5,
                marginTop: 12,
              }}
              resizeMode={"contain"}
            />
            <Text
              style={{ fontSize: 23, color: "#010979", marginHorizontal: 5 }}
            >
              ผลประเมินพฤติกรรมสุขภาพ
            </Text>
          </View>
          <View
            style={{ flex: 6, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 23, color: "#010979" }}>กราฟ</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Screen;
