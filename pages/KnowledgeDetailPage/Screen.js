import {
  Dimensions,
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

import BookIcon from "../../assets/icon_book.png";
import CalendarIcon from "../../assets/calendar_icon.png";
import RenderHtml from "react-native-render-html";
import Style from "./Style";
import YoutubePlayer from "react-native-youtube-iframe";
import iconShare from "../../assets/icon_share.png";
import logoGIS from "../../assets/logo_with_label.png";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const ShareButton = ({ onPress }) => (
  <TouchableOpacity style={Style.shareButton} onPress={onPress}>
    <Text style={{ color: "#FFFFFF", fontSize: 16,fontWeight:'bold' }}>แชร์</Text>
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
    const { header, publicDate, subHead, banner, detail, vdoLink } = this.state;
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
              height={deviceWidth * (9 / 16)}
              play={false}
              videoId={videoId}
            />
          );
        })
      );
    };
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            "React Native | A framework for building native apps using React",
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
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
            <View style={Style.subHead}>
              <Image source={BookIcon} style={Style.subTextIcon} />
              <Text style={Style.subTextLabel}>{subHead}</Text>
            </View>
            <ShareButton onPress={() => onShare()} />
          </View>
          {banner && <Image source={{ uri: banner }} style={Style.banner} />}

          <View style={{ padding: 15 }}>
            {detail && (
              <RenderHtml
                contentWidth={deviceWidth}
                source={{ html: detail }}
                // systemFonts={["Prompt"]}
                // baseStyle={{ fontFamily: "Prompt" }}
                ignoredStyles={["font-family", "letter-spacing"]}
              />
            )}
            {renderVideo()}
          </View>
          <View style={{ padding: 15 }}>
            <View style={Style.line} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Image source={logoGIS} style={Style.imageFooter} />
              <ShareButton onPress={() => onShare(header)} />
            </View>
            {publicDate && (
              <View
                style={[Style.date, { marginTop: 20, alignSelf: "flex-end" }]}
              >
                <Image source={CalendarIcon} style={Style.dateIcon} />
                <Text style={Style.dateLabel}>{publicDate}</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Screen;
