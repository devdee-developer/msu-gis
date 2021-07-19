import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

import ArrowRight from "../../assets/arrow-r-yellow.png";
import CalendarIcon from "../../assets/calendar_icon.png";
import NewsEx from "../../assets/news_ex.png"
import Slideshow from "react-native-image-slider-show";
import Style from "./Style";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 2,
      interval: null,
      dataSource: [
        {
          id: "1",
          url: "http://placeimg.com/640/480/any",
        },
        {
          id: "2",

          url: "http://placeimg.com/640/480/any",
        },
        {
          id: "3",

          url: "http://placeimg.com/640/480/any",
        },
        {
          id: "4",

          url: "http://placeimg.com/640/480/any",
        },
        {
          id: "5",
          url: "http://placeimg.com/640/480/any",
        },
      ],
    };
  }
  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 4000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
      },
    ];
    const News = () => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            height: 120,
            margin: 5,
            borderRadius: 10,
            padding: 10,
            shadowColor: "rgba(201, 201, 226, 0.45098039215686275)",
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            justifyContent:'space-between'
          }}
          onPress={() => console.log("Touch")}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{ flex: 4,  padding:5}}
            >
              <Image source={NewsEx} style={{flex:1, borderRadius: 8}}>

              </Image>
            </View>
            <View style={{ flex:1 }}></View>
          </View>
          <View style={{ flex: 2 ,paddingLeft:15}}>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 16 }}>
                เปิดรับอาสาสมัครเพื่อออกตรวจเยี่ยม ผู้สูงอายุประจำปี 2564
                ตั้งแต่วันนี้ ถึง 31 ธันวาคม 2564
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 109,
                  height: 27,
                  backgroundColor: "#010979",
                  borderRadius: 17,
                }}
              >
                <Text
                  style={{ color: "#FFFFFF", fontSize: 14, marginBottom: 3,marginRight:5 }}
                >
                  รายละเอียด
                </Text>
                <Image
                  source={ArrowRight}
                  style={{
                    position: "absolute",
                    right: 7,
                    width: 12,
                    height: 12,
                  }}
                />
              </View>
              <View
                style={{ flexDirection: "row", flex: 1, alignItems: "center" }}
              >
                <Image
                  source={CalendarIcon}
                  style={{ width: 14, height: 14 }}
                />
                <Text style={{ marginLeft: 5, fontSize: 14, color: "#97989B" }}>
                  11 ธันวาคม 2564
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={Style.container}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Text style={{ fontSize: 30, color: "#010979" }}>
            ข่าวสารและกิจกรรม
          </Text>
          <Text style={{ fontSize: 16, color: "#3B3D48" }}>
            แจ้งข่าว กิจกรรมและการปฏิบัติหน้าที่อาสาสมัครชุมชน{" "}
          </Text>
        </View>

        <View style={Style.headerGroup}>
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            height={deviceHeight / 3}
            arrowSize={0}
            indicatorColor={"rgba(0, 9, 121, 1)"}
            indicatorSelectedColor={"rgba(118,118,255,1)"}
            onPositionChanged={(position) => this.setState({ position })}
            containerStyle={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              paddingBottom: 30,
              justifyContent: "space-between",
            }}
            onPress={(item) => {
              alert(item.image.id);
              // this.props.navigation.navigate("News Detail", { id: item.image.id });
            }}
          />
          <View style={{ height: 5 }}></View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontSize: 30, color: "#010979" }}>ข่าวทั้งหมด</Text>
            <Text style={{ fontSize: 16, color: "#3B3D48" }}>
              เพื่อไม่พลาดทุกเรื่องราวที่เกิดขึ้น
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
              flex: 1,
            }}
          >
            {/* for button  */}
          </View>
        </View>
        <News />
        <News />
        <News />
        <News />
      </View>
    );
  }
}
export default Screen;
