import { ACCESS_TOKEN, USER_TOKEN, apiUrl } from "../../constants/config";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { Component } from "react";
import * as SQLite from "expo-sqlite";
import Background from "../../assets/home_background.png";
import IconSpeech from "../../assets/icon_speech.png";
import Slideshow from "react-native-image-slider-show";
import Style from "./Style";
import { initialLocalData } from "../../database";
import { httpClient } from "../../utils/HttpClient";
import menu_assessment from "../../assets/menu_button_assessment.png";
import menu_knowledge from "../../assets/meun_button_knowledge.png";
import menu_urgent from "../../assets/menu_button_urgent.png";
import menu_visit from "../../assets/menu_button_visit.png";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {}
        };
      }
    };
  }
  const db = SQLite.openDatabase("db.db");
  return db;
}
const db = openDatabase();
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      position: 2,
      interval: null,
      dataSource: [],
      rapidNews: {}
    };
  }

  componentDidMount() {
    this.loadLocalData();
    this.loadDataFromApi();
  }
  initialData() {}
  async loadDataFromApi() {
    this.setState({ isLoading: true });
    const url = `${apiUrl}/initialapp`;
    const data = {};
    try {
      const res = await httpClient.post(url, data);
      const result = await res.data.Data;
      const dbResult =  await initialLocalData(result);
      console.log(dbResult)
      this.loadLocalData();
    } catch (err) {
      console.log(`error :${JSON.stringify(err)}`);
      alert(`error :${JSON.stringify(err) }`);
      this.loadLocalData();
    }
  }
  loadLocalData() {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from tb_news where top_news = 1`,
        [],
        (_, { rows: { _array: data } }) => {
          this.setState(
            {
              position: 2,
              dataSource: data
                .filter((row) => row.top_news == 1)
                .map((slide) => ({
                  ...slide,
                  url: slide.banner
                })),
              rapidNews: data[0]
            },
            () => {
              this.setState({
                interval: setInterval(() => {
                  this.setState({
                    position:
                      this.state.position === this.state.dataSource.length
                        ? 0
                        : this.state.position + 1
                  });
                }, 5000),
                isLoading: false
              });
            }
          );
        }
      );
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View style={Style.container}>
        <Image
          source={Background}
          style={{
            position: "absolute",
            left: -150,
            top: "40%",
            height: 300,
            width: 346,
            resizeMode: "contain"
          }}
        />
        <View style={Style.slider_show_group}>
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            height={deviceHeight / 2.55}
            arrowSize={0}
            indicatorColor={"rgba(0, 9, 121, 1)"}
            indicatorSelectedColor={"rgba(118,118,255,1)"}
            onPositionChanged={(position) => this.setState({ position })}
            containerStyle={{
              flex: 1,
              backgroundColor: "rgba(240,238,247,1)",
              paddingBottom: 25,
              justifyContent: "space-between"
            }}
            onPress={(item) => {
              this.props.navigation.navigate("NewsDetailScreen", {
                detail: item.image
              });
            }}
          />
        </View>
        <View style={Style.news_group}>
          {this.state.rapidNews && (
            <TouchableOpacity
              style={Style.news}
              onPress={() =>
                this.props.navigation.navigate("NewsDetailScreen", {
                  detail: this.state.rapidNews
                })
              }
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={IconSpeech} style={Style.news_icon} />
              </View>

              <Text style={Style.news_label} numberOfLines={2}>
                {this.state.rapidNews.header}
              </Text>
              <View style={{ flex: 0.5 }}></View>
            </TouchableOpacity>
          )}
        </View>
        <View style={Style.menu_button_group}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                Style.menu_button,
                { backgroundColor: "rgba(100, 100, 247, 1)" }
              ]}
              onPress={() => {}}
            >
              <Image source={menu_assessment} style={Style.menu_button_image} />
              <Text style={Style.menu_button_label}>ประเมินสุขภาพ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Style.menu_button,
                { backgroundColor: "rgba(245, 199, 97, 1)" }
              ]}
              onPress={() => this.props.navigation.navigate("KnowledgeScreen")}
            >
              <Image source={menu_knowledge} style={Style.menu_button_image} />
              <Text style={Style.menu_button_label}>คลังความรู้</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                Style.menu_button,
                { backgroundColor: "rgba(26, 188, 156, 1)" }
              ]}
              onPress={() => {}}
            >
              <Image source={menu_visit} style={Style.menu_button_image} />
              <Text style={Style.menu_button_label}>ออกเยี่ยม</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Style.menu_button,
                { backgroundColor: "rgba(242, 110, 79, 1)" }
              ]}
              onPress={() => {}}
            >
              <Image source={menu_urgent} style={Style.menu_button_image} />
              <Text style={Style.menu_button_label}>แจ้งเหตุด่วน</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Screen;
