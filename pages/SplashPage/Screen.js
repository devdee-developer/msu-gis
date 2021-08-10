import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ACCESS_TOKEN, USER_TOKEN } from "../../constants/config";
import React, { Component } from "react";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import Style from "./Style";
import arrow_r from "../../assets/arrow-r.png";
import image from "../../assets/bg_splash.png";
import logo from "../../assets/logo.png";
import user_lock_icon from "../../assets/user_lock_icon.png";
import { CommonActions, NavigationActions } from "@react-navigation/native";
class Screen extends Component {
  componentDidMount() {
    this.checkLogin();
  }
  async checkLogin() {
    const user_token = await getItemAsync(USER_TOKEN);
    if (user_token != null && user_token != "") {
      this.goHomeScreen();
    }
  }
  goHomeScreen() {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: "MainApp" }]
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <SafeAreaView
        style={[
          Style.container,
          {
            flexDirection: "column",
            paddingTop: Platform.OS === "android" ? 25 : 0
          }
        ]}
      >
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={Style.bgImage}
          imageStyle={Style.bgImageStyle}
        />

        <View style={Style.containerLogo}>
          <Image source={logo} style={Style.imageLogoSplash} />
        </View>
        <View style={Style.text1}>
          <Text style={{ fontSize: 20, color: "#010979" }}>
            แอพพลิเคชั่นเพื่อการเฝ้าระวังด้านสุขภาพ
          </Text>
        </View>
        <View style={Style.text2}>
          <Text style={{ fontSize: 30, color: "#010979", fontWeight: "bold" }}>
            ด้วยเทคโนโลยี จีไอเอส
          </Text>
        </View>
        <View style={Style.text3}>
          <Text style={{ fontSize: 16, color: "#3B3D48" }}>
            GIS MOBILE APPLICATION
          </Text>
        </View>
        <View style={{ flex: 13 }}>
          <View style={Style.containerBtnLoginSplash}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LoginScreen")}
              style={Style.btnSplashLogin}
            >
              <Text style={{ fontSize: 23, color: "#fff", marginBottom: 5 }}>
                <Image
                  source={user_lock_icon}
                  style={{ width: 30, height: 30 }}
                />{" "}
                เข้าสู่ระบบ
              </Text>
              <Image
                source={arrow_r}
                style={{
                  width: 25,
                  height: 13,
                  position: "absolute",
                  top: 19,
                  right: 20
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Screen;
