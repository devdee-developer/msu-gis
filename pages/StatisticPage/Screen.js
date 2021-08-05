import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

import DataImage from "../../assets/statistic_icon_data.png";
import { Entypo } from "@expo/vector-icons";
import HealthImage from '../../assets/health.png'
import HeartImage from "../../assets/statistic_icon_heart.png";
import RadioGroup from "react-native-radio-buttons-group";
import Style from "./Style";
import VisitImage from '../../assets/visit_green.png'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupData: [],
      selectedItem: {},
    };
  }
  componentDidMount() {
   this.initialData()
  }
  initialData=()=>{
    const radioStyle = {
      borderColor: "#E4E1F0",
      color: "#7676FF",
      size: 22,
    };
    const containerRadioStyle = {
      margin: 0,
      borderBottomColor: "#E4E1F0",
      borderBottomWidth: 1,
      height: 50,
      width: "100%",
    }
    const labelRadioStyle = {
      fontSize: 20,
      color: "#010979",
      marginBottom: 4,
    }
    const groupData = [
      {
        id: "1",
        label: "ผลประเมินพฤติกรรมสุขภาพ",
        value: "ผลประเมินพฤติกรรมสุขภาพ",
        image:HeartImage,
        imageStyle:{
          width: 27,
          height: 30.3,
          marginHorizontal: 5,
          marginTop: 12,
        },
        selected: true,
        ...radioStyle,
        labelStyle: {...labelRadioStyle,color: "#6F63FD"},
        containerStyle:containerRadioStyle,
      },
      {
        id: "2",
        label: "ผลการประเมิน",
        value: "ผลการประเมิน",
        image:HealthImage,
        imageStyle:{
          width: 46.56,
          height:37.96,
          marginHorizontal: 5,
        },
        labelStyle:labelRadioStyle,
        ...radioStyle,
        containerStyle: containerRadioStyle,
      },
      {
        id: "3",
        label: "ผลการออกเยี่ยม",
        value: "ผลการออกเยี่ยม",
        image:VisitImage,
        imageStyle:{
          width: 42.27,
          height: 36.39,
          marginHorizontal: 5,
        },
        labelStyle:labelRadioStyle,
        ...radioStyle,
        containerStyle: {...containerRadioStyle,borderBottomWidth:0},
      },
    ];
    this.setState({ groupData: groupData ,selectedItem:groupData[0]});
  }
  onPressRadioButton = (data) => {
    this.setState(
      {
        groupData: data,
        selectedItem: data.find((item) => item.selected),
      },
      () => {
        this.setState({
          groupData: this.state.groupData.map((item) => {
            if (item.selected) {
              item.labelStyle={ fontSize: 20, color: "#6F63FD", marginBottom: 4 }
            } else {
              item.labelStyle={ fontSize: 20, color: "#010979", marginBottom: 4 }
            }
            return item;
          }),
        });
      }
    );
  };
  render() {
    const {selectedItem,groupData} = this.state
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
              alignItems: "center",
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
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
              height: 40,
              width: deviceWidth - 36,
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
            }}
            activeOpacity={0.8}
            onPress={() => alert(1)}
          >
            <Text numberOfLines={1} style={{ color: "#010979", fontSize: 16 }}>
              {selectedItem.label} (ภาพรวมทั้งหมด)
            </Text>
            <Entypo name="chevron-down" size={24} color="#010979" />
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
              source={selectedItem.image}
              style={selectedItem.imageStyle}
              resizeMode={"contain"}
            />
            <Text
              style={{ fontSize: 23, color: "#010979", marginHorizontal: 5 }}
            >
              {selectedItem.label}
            </Text>
          </View>
          <View style={{ flex: 6, padding: 20 }}>
            <Text style={{ fontSize: 14, color: "#97989B" }}>
              อัพเดทเมื่อ : 18 ม.ค. 64, เวลา 14:28 น.
            </Text>
            <RadioGroup
              containerStyle={{ alignItems: "flex-start" }}
              radioButtons={groupData}
              onPress={this.onPressRadioButton}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default Screen;
