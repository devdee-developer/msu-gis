import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import React, { Component } from "react";

import CalendarIcon from "../../assets/calendar_icon.png";
import Card from "../../components/CardCustomComponent/Screen";
import HeaderWithSearch from "../../components/HeaderWithSearchComponent/Screen";
import Slideshow from "react-native-image-slider-show";
import Style from "./Style";
import { apiUrl } from "../../constants/config";
import axios from "axios";

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
      onSearch:false
    };
    console.log(props);
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
      token:
        "JijXEcrg7K7SN3/DMO+Duhce3tzV51XpThrlIbApG04vZkRMocVzu57bpL2gG07P7N5Y8nwYLoLJN8eRbQX7T199PxnyusTntsKiGTHMT2c=",
    };
    const headers = {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tb25wbGVybi5jb21cL2xhcmF2ZWxcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2Mjc3MTA4NTIsImV4cCI6MTYyODA3MDg1MiwibmJmIjoxNjI3NzEwODUyLCJqdGkiOiJsOHl5Z2Vod0xrdVBFU081Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.iWp1qLPX2UQmP4JZpHndaym3CPtLB1i-GybUw1VzY9Q",
    };
    try {
      const res = await axios.post(url, data, { headers: headers });
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
      return this.state.newsList.map((data, index) => (
        <Card
          key={"news" + index}
          onPress={() =>
            this.props.navigation.navigate("NewsDetailScreen", { detail: data })
          }
          thumbnail={data.banner}
          text={data.header}
          footer={
            <FooterCard label={data.publicDate}/>
          }
        />
      ));
    };
    const renderNewsListFilter = () => {
      return this.state.newsListFromSearch.map((data, index) => (
        <Card
          key={"newsSearch" + index}
          onPress={() =>
            this.props.navigation.navigate("NewsDetailScreen", { detail: data })
          }
          thumbnail={data.banner}
          text={data.header}
          footer={
            <FooterCard label={data.publicDate}/>
          }
        />
      ));
    };
    return (
      <>
        <HeaderWithSearch
          navigation={this.props.navigation}
          onSearchFocus={()=>this.setState({onSearch:true})}
          onSearchBlur={()=>this.setState({onSearch:false,newsListFromSearch:[]})}
          onChangeText={(e) => this.debounceSearch(e)}
          onChangeText={(e) => this.debounceSearch(e)}
          value={this.state.search}
          
        />
        <View style={Style.container}>
          {this.state.onSearch && (
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: "#F7F5FC", zIndex: 1 },
              ]}
            >
              <Text style={{ color: "#010979", fontSize: 18, margin: 20 }}>
                ตรงกับคำที่ค้นหา {this.state.newsListFromSearch.length} รายการ
              </Text>
              <ScrollView>{renderNewsListFilter()}</ScrollView>
            </View>
          )}
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
              <Text style={{ fontSize: 30, color: "#010979" }}>
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
            {renderNewsList()}
          </ScrollView>
        </View>
      </>
    );
  }
}
export default Screen;
