import {
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

import BookIcon from "../../assets/icon_book.png";
import Card from "../../components/CardCustomComponent/Screen";
import HeaderWithSearch from "../../components/HeaderWithSearchComponent/Screen";
import KnowledgeImage from "../../assets/knowledge.png";
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
      knowledgeList:[],
      knowledgeListFromSearch: [],
      category:'',
      refreshing: false,
      search: "",
      onSearchFocus:false,
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
    const url = `${apiUrl}/getKm`;
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
    this.setState({
      knowledgeList: data.data,
      categoryList: data.categoryList,
      category:data.categoryList?data.categoryList[0]:''
    });
  }
  onRefresh = () => {
    this.loadData();
  };
  onSearch = (e) => {
    this.setState({ search: e });
    let text = e.toLowerCase();
    let listItem = this.state.knowledgeList;
    let filteredHeader = listItem.filter((item) => {
      return item.header.toLowerCase().match(text);
    });
    if (!text || text === "") {
      this.setState({ knowledgeListFromSearch: [] });
    } else if (!Array.isArray(filteredHeader) && !filteredHeader.length) {
    } else if (Array.isArray(filteredHeader)) {
      this.setState({ knowledgeListFromSearch: filteredHeader });
    }
  };
  debounceSearch = debounce(this.onSearch, 500);
  render() {
    const {category,knowledgeList,knowledgeListFromSearch} = this.state;
    const total =  knowledgeList.filter(item=>item.category==category).length
    const FooterCard = ({ label }) => (
      <View style={Style.cardFooter}>
        <Image source={BookIcon} style={Style.cardFooterIcon} />
        <Text style={Style.cardFooterLabel}>{label}</Text>
      </View>
    );
    const renderKnowledgeList = () => {
      return knowledgeList.filter(item=>item.category==category).map((data, index) => (
        <Card
          key={"knowledge" + index}
          onPress={() =>
            this.props.navigation.navigate("KnowledgeDetailScreen", {
              detail: data,
            })
          }
          thumbnail={data.thumbnail}
          text={data.header}
          cardStyle={{ height: 100 }}
          footer={<FooterCard label={data.subHead} />}
        />
      ));
    };
    const renderKnowledgeListSearch = () => {
      return knowledgeListFromSearch.map((data, index) => (
        <Card
          key={"knowledge" + index}
          onPress={() =>
            this.props.navigation.navigate("KnowledgeDetailScreen", {
              detail: data,
            })
          }
          thumbnail={data.thumbnail}
          text={data.header}
          cardStyle={{ height: 100 }}
          footer={<FooterCard label={data.subHead} />}
        />
      ));
    };

    const renderCategory = ({ item }) => <CategoryButton label={item} />;
    const CategoryButton = ({ label }) => (
      <TouchableOpacity
        style={[ Style.buttonCategory,category == label&&Style.buttonCategorySelected]}
        onPress={()=>this.setState({category:label})}
      >
        <Text style={[Style.buttonLabelCategory,category == label&&Style.buttonLabelCategorySelected]}>{label}</Text>
      </TouchableOpacity>
    );
    return (
      <>
        <HeaderWithSearch
          navigation={this.props.navigation}
          onSearchFocus={()=>this.setState({onSearch:true})}
          onSearchBlur={()=>this.setState({onSearch:false,knowledgeListFromSearch:[]})}
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
                ตรงกับคำที่ค้นหา {knowledgeListFromSearch.length}{" "}
                รายการ
              </Text>
              <ScrollView>{renderKnowledgeListSearch()}</ScrollView>
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
              <View style={{ width: 100 }}>
                <Image
                  source={KnowledgeImage}
                  style={{ height: 60.47, width: 75.94 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 30, color: "#010979" }}>
                  คลังความรู้
                </Text>
                <Text style={{ fontSize: 16, color: "#3B3D48" }}>
                  รวบรวมองค์ความรู้ด้านต่างๆ ไว้ที่นี่
                </Text>
              </View>
            </View>
            <View style={{ height: 76 ,paddingVertical:18,backgroundColor:'#FFFFFF'}}>
              <FlatList
                horizontal={true}
                data={this.state.categoryList}
                renderItem={renderCategory}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 23,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18, color: "#010979" }}>ทั้งหมด </Text>
                <Text style={{ fontSize: 18, color: "#6F63FD" }}>
                  {total} รายการ
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
            {renderKnowledgeList()}
          </ScrollView>
        </View>
      </>
    );
  }
}
export default Screen;
