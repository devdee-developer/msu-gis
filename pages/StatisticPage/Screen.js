import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryPie,
} from "victory-native";

import CloseIcon from "../../assets/close.png";
import DataImage from "../../assets/statistic_icon_data.png";
import { Entypo } from "@expo/vector-icons";
import HealthImage from "../../assets/health.png";
import HeartImage from "../../assets/statistic_icon_heart.png";
import Model from "../../components/ModalCustomComponent/Screen";
import RadioGroup from "react-native-radio-buttons-group";
import Style from "./Style";
import VisitImage from "../../assets/visit_green.png";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

DatasetLabel = ({ label, color }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    }}
  >
    <View
      style={{
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 9,
        backgroundColor: color,
      }}
    />
    <Text style={{ fontSize: 16, color: "#0D0E12" }}>{label}</Text>
  </View>
);
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupData: [],
      selectedItem: {},
      onSelectOptionOpen: false,
    };
  }
  componentDidMount() {
    this.initialData();
  }
  initialData = () => {
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
      paddingLeft: 30,
    };
    const labelRadioStyle = {
      fontSize: 20,
      color: "#010979",
      marginBottom: 4,
    };
    const groupData = [
      {
        id: "1",
        label: "ผลประเมินพฤติกรรมสุขภาพ",
        value: "ผลประเมินพฤติกรรมสุขภาพ",
        image: HeartImage,
        imageStyle: {
          width: 27,
          height: 30.3,
          marginHorizontal: 5,
          marginTop: 12,
        },
        selected: true,
        ...radioStyle,
        labelStyle: { ...labelRadioStyle, color: "#6F63FD" },
        containerStyle: containerRadioStyle,
      },
      {
        id: "2",
        label: "ผลการประเมิน",
        value: "ผลการประเมิน",
        image: HealthImage,
        imageStyle: {
          width: 46.56,
          height: 37.96,
          marginHorizontal: 5,
        },
        labelStyle: labelRadioStyle,
        ...radioStyle,
        containerStyle: containerRadioStyle,
      },
      {
        id: "3",
        label: "ผลการออกเยี่ยม",
        value: "ผลการออกเยี่ยม",
        image: VisitImage,
        imageStyle: {
          width: 42.27,
          height: 36.39,
          marginHorizontal: 5,
        },
        labelStyle: labelRadioStyle,
        ...radioStyle,
        containerStyle: { ...containerRadioStyle, borderBottomWidth: 0 },
      },
    ];
    this.setState({ groupData: groupData, selectedItem: groupData[0] });
  };
  onPressRadioButton = (data) => {
    this.setState(
      {
        onSelectOptionOpen: false,
        groupData: data,
        selectedItem: data.find((item) => item.selected),
      },
      () => {
        this.setState({
          groupData: this.state.groupData.map((item) => {
            if (item.selected) {
              item.labelStyle = {
                fontSize: 20,
                color: "#6F63FD",
                marginBottom: 4,
              };
            } else {
              item.labelStyle = {
                fontSize: 20,
                color: "#010979",
                marginBottom: 4,
              };
            }
            return item;
          }),
        });
      }
    );
  };
  renderChart = () => {
    let chart;
    if (this.state.selectedItem.id == 1) {
      chart = this.renderBarChart();
    } else if(this.state.selectedItem.id == 2) {
      chart = this.renderPieChartEstimate();
    }else{
      chart = this.renderPieChartVisit();
    }
    return chart;
  };

  renderBarChart = () => {
    const data1 = {
      label: "ระดับความเครียด",
      color: "#F26E4F",
      data: [
        { x: "ชาย", y: 4 },
        { x: "หญิง", y: 8 },
      ],
    };
    const data2 = {
      label: "ระดับคุณภาพชีวิต",
      color: "#54D5BB",
      data: [
        { x: "ชาย", y: 6.2 },
        { x: "หญิง", y: 3 },
      ],
    };
    const data3 = {
      label: "ระดับพฤติกรรมการบริโภค",
      color: "#F5C761",
      data: [
        { x: "ชาย", y: 5 },
        { x: "หญิง", y: 4 },
      ],
    };
    const data4 = {
      label: "ระดับพฤติกรรมการออกกำลังกาย",
      color: "#F73F94",
      data: [
        { x: "ชาย", y: 2 },
        { x: "หญิง", y: 1 },
      ],
    };
    const pointStyle = {
      width: 16,
      height: 16,
      borderRadius: 8,
      marginRight: 9,
    };
    return (
      <>
        <VictoryChart
          width={deviceWidth - 50}
          height={258}
          domainPadding={{ x: 100 }}
        >
          <VictoryGroup offset={20} colorScale={"qualitative"}>
            <VictoryBar
              style={{ data: { fill: data1.color } }}
              data={data1.data}
            />
            <VictoryBar
              style={{ data: { fill: data2.color } }}
              data={data2.data}
            />
            <VictoryBar
              style={{ data: { fill: data3.color } }}
              data={data3.data}
            />
            <VictoryBar
              style={{ data: { fill: data4.color } }}
              data={data4.data}
            />
          </VictoryGroup>
          <VictoryAxis dependentAxis label="คน" />
          <VictoryAxis label="เพศ" />
        </VictoryChart>
        <View style={{ marginTop: 20, marginLeft: 40 }}>
          <DatasetLabel label={data1.label} color={data1.color} />
          <DatasetLabel label={data2.label} color={data2.color} />
          <DatasetLabel label={data3.label} color={data3.color} />
          <DatasetLabel label={data4.label} color={data4.color} />
        </View>
      </>
    );
  };
  renderPieChartEstimate = () => {
    return (
      <>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ alignItems: "center" }}>
            <VictoryPie
              colorScale={["#010979", "#54D5BB"]}
              width={deviceWidth / 2.4}
              height={deviceWidth / 2.4}
              data={[
                { x: 2, y: 2 },
                { x: 3, y: 3 },
              ]}
              innerRadius={deviceWidth/6}
              labelRadius={deviceWidth/9}
              style={{ labels: { fontSize: 16, fill: "#ffffff" }, margin: 0 }}
            />
            <Text
              style={{ fontSize: 23, fontWeight: "bold", color: "#010979" }}
            >
              ชาย
            </Text>
            <Text style={{ fontSize: 16, color: "#7F7FA8" }}>
              (จากจำนวน 5 คน)
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <VictoryPie
              colorScale={["#010979", "#54D5BB"]}
              width={deviceWidth / 2.4}
              height={deviceWidth / 2.4}
              data={[
                { x: 2, y: 2 },
                { x: 5, y: 5 },
              ]}
              innerRadius={deviceWidth/6}
              labelRadius={deviceWidth/9}
              style={{ labels: { fontSize: 16, fill: "#ffffff" }, margin: 0 }}
            />
            <Text
              style={{ fontSize: 23, fontWeight: "bold", color: "#010979" }}
            >
              หญิง
            </Text>
            <Text style={{ fontSize: 16, color: "#7F7FA8" }}>
              (จากจำนวน 7 คน)
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 50, marginLeft: 40 }}>
          <DatasetLabel label={"ยังไม่ได้ออกเยี่ยม"} color={"#010979"} />
          <DatasetLabel label={"ออกเยี่ยมแล้ว"} color={"#54D5BB"} />
        </View>
      </>
    );
  };
  renderPieChartVisit = () => {
    return (
      <>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ alignItems: "center" }}>
            <VictoryPie
              colorScale={["#010979", "#54D5BB"]}
              width={deviceWidth / 2.4}
              height={deviceWidth / 2.4}
              data={[
                { x: 3, y: 3 },
                { x: 2, y: 2 },
              ]}
              innerRadius={deviceWidth/6}
              labelRadius={deviceWidth/9}
              style={{ labels: { fontSize: 16, fill: "#ffffff" }, margin: 0 }}
            />
            <Text
              style={{ fontSize: 23, fontWeight: "bold", color: "#010979" }}
            >
              ชาย
            </Text>
            <Text style={{ fontSize: 16, color: "#7F7FA8" }}>
              (จากจำนวน 5 คน)
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <VictoryPie
              colorScale={["#010979", "#54D5BB"]}
              width={deviceWidth / 2.4}
              height={deviceWidth / 2.4}
              data={[
                { x: 4, y: 4 },
                { x: 3, y: 3 },
              ]}
              innerRadius={deviceWidth/6}
              labelRadius={deviceWidth/9}
              style={{ labels: { fontSize: 16, fill: "#ffffff" }, margin: 0 }}
            />
            <Text
              style={{ fontSize: 23, fontWeight: "bold", color: "#010979" }}
            >
              หญิง
            </Text>
            <Text style={{ fontSize: 16, color: "#7F7FA8" }}>
              (จากจำนวน 7 คน)
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 50, marginLeft: 40 }}>
          <DatasetLabel label={"ยังไม่ถูกปะเมิน"} color={"#010979"} />
          <DatasetLabel label={"ถูกประเมินแล้ว"} color={"#54D5BB"} />
        </View>
      </>
    );
  };

  render() {
    const { selectedItem, groupData, onSelectOptionOpen } = this.state;

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
              paddingLeft: 12,
              paddingRight: 35,
              paddingVertical: 8,
            }}
            activeOpacity={0.8}
            onPress={() => this.setState({ onSelectOptionOpen: true })}
          >
            <Text numberOfLines={1} style={{ color: "#010979", fontSize: 16 }}>
              {selectedItem.label} (ภาพรวมทั้งหมด)
            </Text>
            <Entypo
              name="chevron-down"
              size={24}
              color="#010979"
              style={{ position: "absolute", top: 8, right: 10 }}
            />
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
            {this.renderChart()}
          </View>
        </View>

        <Model
          Visible={onSelectOptionOpen}
          Style={{ top: 70, width: 370, height: 404 }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.setState({ onSelectOptionOpen: false })}
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={CloseIcon}
              style={{
                width: 12.54,
                height: 12.54,
              }}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 50, marginTop: 50, marginBottom: 30 }}>
            <Text
              style={{ color: "#010979", fontSize: 30, fontWeight: "bold" }}
            >
              เลือกข้อมูลสถิติ
            </Text>
            <Text style={{ color: "#3B3D48", fontSize: 20 }}>
              ท่านสามารถเลือกได้ตามต้องการ
            </Text>
          </View>
          <View style={{ padding: 15 }}>
            <RadioGroup
              containerStyle={{ alignItems: "flex-start" }}
              radioButtons={groupData}
              onPress={this.onPressRadioButton}
            />
          </View>
        </Model>
      </View>
    );
  }
}
export default Screen;
