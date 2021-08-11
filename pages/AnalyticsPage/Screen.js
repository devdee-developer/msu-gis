import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { Component } from "react";
import Svg, { Image as ImageSVG } from "react-native-svg";

import CloseIcon from "../../assets/close.png";
import DataImage from "../../assets/analytics_icon_data.png";
import { Entypo } from "@expo/vector-icons";
import HealthImage from "../../assets/health.png";
import Modal from "../../components/ModalCustomComponent/Screen";
import RadioGroup from "react-native-radio-buttons-group";
import Style from "./Style";
import { VictoryPie } from "victory-native";
import { apiUrl } from "../../constants/config";
import { httpClient } from "../../utils/HttpClient";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const option = [
  {
    title: "ประเมินโรคเบาหวาน"
  },
  {
    title: "ประเมินโรคความดันโลหิตสูง"
  },
  {
    title: "โรคหัวใจและหลอดเลือด"
  },
  {
    title: "สมองเสื่อม"
  },
  {
    title: "โรคซึมเศร้า"
  },
  {
    title: "โรคข้อเข่าเสื่อม"
  },
  {
    title: "ภาวะหกล้ม"
  },
  {
    title: "สุขภาวะทางตา"
  },
  {
    title: "การได้ยิน"
  },
  {
    title: "การประเมินปัญหาการนอน"
  },
  {
    title: "การประเมินสุขภาพช่องปาก"
  },
  {
    title: "ภาวะโภชนาการ"
  },
  {
    title: "การทำกิจวัตรประจำวัน"
  }
];
DatasetLabel = ({ label, color }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5
    }}
  >
    <View
      style={[
        Style.datasetLabel,
        {
          backgroundColor: color
        }
      ]}
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
      updateDate: "",
      refreshing: false
    };
  }
  componentDidMount() {
    const groupData = option.map(this.setGroupData);
    this.setState({
      groupData: groupData,
      selectedItem: groupData[0]
    });
    this.loadData();
  }
  async loadData() {
    this.setState({ refreshing: true });
    const url = `${apiUrl}/getStatic`;
    const data = {};
    try {
      const res = await httpClient.post(url, data);
      const result = await res.data.Data;
      this.setState({ refreshing: false });
      this.initialData(result);
    } catch (err) {
      alert(`api error :${err}`);
      console.log(`api error :${err}`);
    }
  }
  initialData = (result) => {
    const groupData = result.map(this.setGroupData);
    this.setState({
      groupData: groupData,
      selectedItem: groupData[0],
      updateDate:
        new Date().toLocaleDateString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }) +
        " " +
        new Date().toLocaleTimeString("th-TH")
    });
  };
  setGroupData = (item, index, array) => {
    const radioStyle = {
      borderColor: "#E4E1F0",
      color: "#7676FF",
      size: 22
    };
    const containerRadioStyle = {
      margin: 0,
      borderBottomColor: "#E4E1F0",
      borderBottomWidth: 1,
      height: 50,
      width: "95%",
      paddingLeft: 30,
      paddingRight: 30
    };
    const labelRadioStyle = {
      fontSize: 20,
      color: "#010979",
      marginBottom: 4
    };

    const data = {
      id: index + 1,
      label: item.title,
      data: item.data,
      selected: index == 0 ? true : false,
      labelStyle: {
        ...labelRadioStyle,
        color: index == 0 ? "#6F63FD" : "#010979"
      },
      ...radioStyle,
      containerStyle: {
        ...containerRadioStyle,
        borderBottomWidth: array.length == index + 1 ? 0 : 1
      }
    };
    return data;
  };
  onPressRadioButton = (data) => {
    this.setState(
      {
        onSelectOptionOpen: false,
        groupData: data,
        selectedItem: data.find((item) => item.selected)
      },
      () => {
        this.setState({
          groupData: this.state.groupData.map((item) => {
            if (item.selected) {
              item.labelStyle = {
                fontSize: 20,
                color: "#6F63FD",
                marginBottom: 4
              };
            } else {
              item.labelStyle = {
                fontSize: 20,
                color: "#010979",
                marginBottom: 4
              };
            }
            return item;
          })
        });
      }
    );
  };
  renderChart = () => {
    let chart;
    if (this.state.selectedItem) {
      chart = this.renderPieChartEstimate(this.state.selectedItem);
    }

    return chart;
  };

  renderPieChartEstimate = (selectedItem) => {
    const male = selectedItem.data.find((item) => item.sex == "male");
    const female = selectedItem.data.find((item) => item.sex == "female");
    return (
      <>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={Style.containerChart}>
            <Svg width={deviceWidth / 1.7} height={deviceWidth / 1.7}>
              <ImageSVG
                x="37.5%"
                y="37.5%"
                width="25%"
                height="25%"
                href={require("../../assets/male.png")}
              />
              <VictoryPie
                colorScale={["#54D5BB", "#F53F4D"]}
                width={deviceWidth / 1.7}
                height={deviceWidth / 1.7}
                data={[
                  { x: male.normal, y: male.normal },
                  { x: male.problem, y: male.problem }
                ]}
                innerRadius={deviceWidth / 10}
                labelRadius={deviceWidth / 1.7 / 3}
                style={{
                  labels: {
                    fontSize: 16,
                    fill: ({ text, index }) =>
                      index == 0 ? "#54D5BB" : "#F53F4D"
                  },
                  margin: 0
                }}
              />
            </Svg>

            <Text style={Style.chartTitleLabel}>ชาย</Text>
            <Text style={{ fontSize: 16, color: "#7F7FA8" }}>
              (จากจำนวน {male.normal + male.problem} คน)
            </Text>
          </View>
          <View style={Style.containerChart}>
            <Svg width={deviceWidth / 1.7} height={deviceWidth / 1.7}>
              <ImageSVG
                x="37.5%"
                y="37.5%"
                width="25%"
                height="25%"
                href={require("../../assets/female.png")}
              />
              <VictoryPie
                colorScale={["#54D5BB", "#F53F4D"]}
                width={deviceWidth / 1.7}
                height={deviceWidth / 1.7}
                data={[
                  { x: female.normal, y: female.normal },
                  { x: female.problem, y: female.problem }
                ]}
                innerRadius={deviceWidth / 10}
                labelRadius={deviceWidth / 1.7 / 3}
                style={{
                  labels: {
                    fontSize: 16,
                    fill: ({ text, index }) =>
                      index == 0 ? "#54D5BB" : "#F53F4D"
                  },
                  margin: 0
                }}
              />
            </Svg>
            <Text style={Style.chartTitleLabel}>หญิง</Text>
            <Text style={{ fontSize: 16, color: "#7F7FA8" }}>
              (จากจำนวน {female.normal + female.problem} คน)
            </Text>
          </View>
        </View>
      </>
    );
  };

  render() {
    const { selectedItem, groupData, onSelectOptionOpen } = this.state;

    return (
      <View style={Style.container}>
        <View style={Style.containerHeader}>
          <View style={Style.selectLabel}>
            <Image
              source={DataImage}
              style={{
                width: 22.65,
                height: 19.24,
                marginRight: 10
              }}
              resizeMode={"contain"}
            />
            <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
              สถิติด้านการประเมินสุขภาพ (ในพื้นที่รับผิดชอบ)
            </Text>
          </View>
          <TouchableOpacity
            style={Style.selectBox}
            activeOpacity={0.8}
            onPress={() => this.setState({ onSelectOptionOpen: true })}
          >
            <Text numberOfLines={1} style={{ color: "#010979", fontSize: 16 }}>
              {selectedItem.label}
            </Text>
            <Entypo
              name="chevron-down"
              size={24}
              color="#010979"
              style={Style.selectBoxIconDown}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={Style.containerContent}>
          <View style={Style.selectedTitle}>
            <Image
              source={HealthImage}
              style={Style.selectedTitleImage}
              resizeMode={"contain"}
            />
            <Text style={Style.selectedTitleLabel}>{selectedItem.label}</Text>
          </View>
          <View style={{ flex: 6, paddingVertical: 20 }}>
            <Text style={Style.updateDateLabel}>
              อัพเดทเมื่อ : {this.state.updateDate}
            </Text>
            {selectedItem.data && this.renderChart()}
            <View style={Style.containerDatasetLabel}>
              <DatasetLabel label={"มีปัญหา"} color={"#F53F4D"} />
              <DatasetLabel label={"ปกติ"} color={"#54D5BB"} />
            </View>
          </View>
        </ScrollView>

        <Modal
          Visible={onSelectOptionOpen}
          Style={{ top: 70, bottom: 49, width: 370, paddingBottom: 50 }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.setState({ onSelectOptionOpen: false })}
            style={Style.iconCloseModal}
          >
            <Image
              source={CloseIcon}
              style={{
                width: 12.54,
                height: 12.54
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
          <ScrollView style={{ padding: 15 }}>
            <RadioGroup
              containerStyle={{ alignItems: "flex-start" }}
              radioButtons={groupData}
              onPress={this.onPressRadioButton}
            />
          </ScrollView>
        </Modal>
      </View>
    );
  }
}
export default Screen;
