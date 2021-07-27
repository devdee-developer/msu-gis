import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";

import CalendarIcon from "../../assets/calendar_icon.png";
import Style from "./Style";
import YoutubePlayer from "react-native-youtube-iframe";
import iconShare from "../../assets/icon_share.png";
import logoGIS from "../../assets/logo_with_label.png";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const ratio = deviceWidth / 640;
const ShareButton = () => (
  <TouchableOpacity
    style={{
      width: 91,
      height: 40,
      backgroundColor: "#7676FF",
      borderRadius: 7,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: 10,
    }}
    onPress={() => {}}
  >
    <Text style={{ color: "#FFFFFF", fontSize: 16 }}>แชร์</Text>
    <Image source={iconShare} style={{ width: 16.58, height: 19.91 }} />
  </TouchableOpacity>
);
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
    const { header, publicDate, banner, detail,vdoLink } = this.state;
    const renderVideo = () => {
      return (
        vdoLink &&
        vdoLink.map((url, index) => {
          let regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {},
            match;
          while ((match = regex.exec(url))) {
            params[match[1]] = match[2];
          }
          const { v: videoId } = params;
          return (
            <YoutubePlayer
              key={`video${index}`}
              height={220}
              play={false}
              videoId={videoId}
            />
          );
        })
      );
    };

    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View
            style={{
              padding: 15,
              paddingBottom: 0,
            }}
          >
            <Text style={Style.titleLabel}>{header}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 15,
              marginHorizontal: 15,
            }}
          >
            <View style={Style.date}>
              <Image source={CalendarIcon} style={Style.dateIcon} />
              <Text style={Style.dateLabel}>{publicDate}</Text>
            </View>
            <ShareButton />
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

          <View style={{ padding: 15 }}>
            {detail && (
              <RenderHtml
                contentWidth={deviceWidth}
                source={{ html: detail }}
                systemFonts={["Prompt"]}
                baseStyle={{ fontFamily: "Prompt" }}
                ignoredStyles={["font-family", "letter-spacing"]}
              />
            )}
            {renderVideo()}
          </View>
          <View style={{ padding: 15 }}>
            <View
              style={{
                borderWidth: 1,
                width: deviceWidth * 0.9,
                borderColor: "#3B3D48",
                marginVertical: 25,
              }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Image
                source={logoGIS}
                style={{
                  height: 39,
                  width: 195,
                  resizeMode: "contain",
                }}
              />
              <ShareButton />
            </View>
            <View
              style={[Style.date, { marginTop: 20, alignSelf: "flex-end" }]}
            >
              <Image source={CalendarIcon} style={Style.dateIcon} />
              <Text style={Style.dateLabel}>{publicDate}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Screen;
