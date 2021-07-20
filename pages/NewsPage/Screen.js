import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

import ArrowRight from "../../assets/arrow-r-yellow.png";
import CalendarIcon from "../../assets/calendar_icon.png";
import Slideshow from "react-native-image-slider-show";
import Style from "./Style";

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
    const listNews = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLp4SeHRBmuhzXiNg3Y_7v43AcRKQqbRXhF7cbxF6qD76LO0qJTbfu4AvkKdq0XZXcBY&usqp=CAU",
        text:"เปิดรับอาสาสมัครเพื่อออกตรวจเยี่ยม ผู้สูงอายุประจำปี 2564 ตั้งแต่วันนี้ ถึง 31 ธันวาคม 2564",
        date:"11 ธันวาคม 2564",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        image:"https://storage.thaipost.net/main/uploads/photos/big/20200428/image_big_5ea7bf414eab2.jpg",
        text:"เริ่มต้นตรวจเชิงรุก เพื่อค้นหาผู้มีความ เสี่ยงต่อการติดเชื้อเพื่อป้องกันการแพร่ กระจ่ายของเชื่อโควิด 19",
        date:"11 ธันวาคม 2564",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        image:"https://www.who.int/images/default-source/thailand-images/health-volunteers-at-koo-bang-luang-sub-district-primary-care-center-take-care-of-patients.jpg?sfvrsn=16eab44b_6",
        text:"ฝึกอบรมลูกหลานผู้สูงอายุ เพื่อการดูแล ผู้สูงอายุที่บ้านด้วยตัวเองได้อย่างถูกวิธี ด้วยบุคลากรผู้เชียวชาญจากจังหวัด... sssssssssssssssssssssssssssss",
        date:"11 ธันวาคม 2564",
      },
    ];
    const News = ({ id,image, text, date }) => {
      return (
        <TouchableOpacity
          style={Style.card}
          onPress={() => alert(id)}
        >
          <View style={{ width: 115 }}>
            <View style={{ flex: 4, padding: 5 }}>
              <Image
                source={{ uri: image }}
                style={Style.cardImg}
                resizeMode="contain"
              ></Image>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <View style={Style.cardBody}>
            <View style={{ flex: 3 }}>
              <Text numberOfLines={3} style={{ fontSize: 16, color: "#0D0E12" }}>{text}</Text>
            </View>
            <View style={Style.cardFooter}>
              <View style={Style.buttonDetail}>
                <Text style={Style.buttonDetailLabel}>รายละเอียด</Text>
                <Image source={ArrowRight} style={Style.buttonDetailIcon} />
              </View>
              {date && (
                <View style={Style.date}>
                  <Image source={CalendarIcon} style={Style.dateIcon} />
                  <Text style={Style.dateLabel}>{date}</Text>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.titleGroup}>
            <Text style={{ fontSize: 30, color: "#010979" }}>
              ข่าวสารและกิจกรรม
            </Text>
            <Text style={{ fontSize: 16, color: "#3B3D48" }}>
              แจ้งข่าว กิจกรรมและการปฏิบัติหน้าที่อาสาสมัครชุมชน{" "}
            </Text>
          </View>

          <View style={Style.sliderGroup}>
            <Slideshow
              dataSource={this.state.dataSource}
              position={this.state.position}
              height={deviceHeight / 3}
              arrowSize={0}
              indicatorColor={"rgba(0, 9, 121, 1)"}
              indicatorSelectedColor={"rgba(118,118,255,1)"}
              onPositionChanged={(position) => this.setState({ position })}
              containerStyle={Style.sliderContainer}
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
              <Text style={{ fontSize: 30, color: "#010979" }}>
                ข่าวทั้งหมด
              </Text>
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
          {listNews&&listNews.map(news =>(<News key={news.id} id={news.id}  image={news.image} text={news.text} date={news.date}/>))}

        </ScrollView>
      </View>
    );
  }
}
export default Screen;
