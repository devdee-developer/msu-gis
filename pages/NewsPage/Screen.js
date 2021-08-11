import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { Component } from "react";

import CalendarIcon from "../../assets/calendar_icon.png";
import Card from "../../components/CardCustomComponent/Screen";
import HeaderWithSearch from "../../components/HeaderWithSearchComponent/Screen";
import Slideshow from "react-native-image-slider-show";
import Style from "./Style";
import { apiUrl } from "../../constants/config";
import { httpClient } from "../../utils/HttpClient";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
let timeOutId;
const debounce = (func, deley) => {
  return (...args) => {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, deley);
  };
};
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 2,
      interval: null,
      dataSource: [],
      newsList: [],
      newsListFromSearch: [],
      refreshing: false,
      search: "",
    };
  }
  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  async loadData() {
    this.setState({ refreshing: true });
    const url = `${apiUrl}/getNews`;
    const data = {
    };
  
    try {
      const res = await httpClient.post(url, data);
      const result = await res.data.Data;
      this.setState({ refreshing: false });
      this.intialData(result);
    } catch (err) {
      alert(`api error :${err}`);
      console.log(`api error :${err}`);
    }
  }
  intialData(data) {
    this.setState(
      {
        position: 2,
        dataSource: data.slideNews.map((slide) => ({
          ...slide,
          url: slide.banner,
        })),
        newsList: data.newsList,
      },
      () => {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position:
                this.state.position === this.state.dataSource.length
                  ? 0
                  : this.state.position + 1,
            });
          }, 5000),
        });
      }
    );
  }
  onRefresh = () => {
    clearInterval(this.state.interval);
    this.loadData();
  };
  onSearch = (e) => {
    this.setState({ search: e });
    let text = e.toLowerCase();
    let listItem = this.state.newsList;
    let filteredHeader = listItem.filter((item) => {
      return item.header.toLowerCase().match(text);
    });
    if (!text || text === "") {
      this.setState({ newsListFromSearch: [] });
    } else if (!Array.isArray(filteredHeader) && !filteredHeader.length) {
    } else if (Array.isArray(filteredHeader)) {
      this.setState({ newsListFromSearch: filteredHeader });
    }
  };
  debounceSearch = debounce(this.onSearch, 500);
  render() {
    const FooterCard = ({ label }) => (
      <View style={Style.cardFooter}>
        <Image source={CalendarIcon} style={Style.cardFooterIcon} />
        <Text style={Style.cardFooterLabel}>{label}</Text>
      </View>
    );
    const renderNewsList = () => {
      return this.state.newsList.map((item, index) => (
        <Card
          key={"news" + index}
          onPress={() =>
            this.props.navigation.navigate("NewsDetailScreen", { detail: item })
          }
          thumbnail={item.banner}
          text={item.header}
          footer={<FooterCard label={item.publicDate} />}
        />
      ));
    };
    const renderNewsListSearch = (item, index) => (
      <Card
        key={"newsSearch" + index}
        onPress={() =>
          this.props.navigation.navigate("NewsDetailScreen", { detail: item })
        }
        thumbnail={item.banner}
        text={item.header}
        footer={<FooterCard label={item.publicDate} />}
      />
    );

    return (
      <>
        <HeaderWithSearch
          navigation={this.props.navigation}
          data={this.state.newsListFromSearch}
          renderItem={renderNewsListSearch}
          onChangeText={(e) => this.debounceSearch(e)}
          onSearchCancel={() => this.setState({ newsListFromSearch: [] })}
          value={this.state.search}
          hideBack={true}
        />
        <View style={Style.container}>
          <ScrollView
            style={Style.scrollView}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
          >
            <View style={Style.titleGroup}>
              <Text style={{ fontSize: 30, color: "#010979",fontWeight:'bold' }}>
                ข่าวสารและกิจกรรม
              </Text>
              <Text style={{ fontSize: 16, color: "#3B3D48" }}>
                แจ้งข่าว กิจกรรมและการปฏิบัติหน้าที่อาสาสมัครชุมชน{" "}
              </Text>
            </View>

            <View style={Style.sliderGroup}>
              {this.state.dataSource.length > 0 && (
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
                    this.props.navigation.navigate("NewsDetailScreen", {
                      detail: item.image,
                    });
                  }}
                />
              )}
              <View style={{ height: 5 }}></View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                flexDirection: "row",
              }}
            >
              <View style={{height:80,justifyContent:'center'}}>
                <Text style={{ fontSize: 30, color: "#010979" ,fontWeight:'bold'}}>
                  ข่าวทั้งหมด
                </Text>
                <Text style={{ fontSize: 16, color: "#3B3D48" }}>
                  เพื่อไม่พลาดทุกเรื่องราวที่เกิดขึ้น
                </Text>
              </View>
              <View
                style={{
                  height:80,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flex: 1
                }}
              >
                {/* for button  */}
              </View>
            </View>
            {renderNewsList()}
          </ScrollView>
        </View>
      </>
    );
  }
}
export default Screen;
