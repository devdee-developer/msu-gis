import { ACCESS_TOKEN, USER_TOKEN, apiUrl } from "../../constants/config";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { PARTNER_ID, PARTNER_KEY } from "../../Config";
import React, { Component } from "react";
import { getItemAsync, setItemAsync } from "expo-secure-store";

import Style from "./Style";
import axios from "axios";
import { httpClient } from "../../utils/HttpClient";
import iconPassword from "../../assets/password.png";
import iconUsername from "../../assets/username.png";
import image from "../../assets/bg_login.png";
import logo from "../../assets/logo.png";
import user_lock_login_icon from "../../assets/login_user_lock_icon.png";
import { CommonActions } from "@react-navigation/native";
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      onFocus: false,
      username: "",
      password: ""
    };
  }
  componentDidMount() {}
  async authentication() {
    const url_access_token = `${apiUrl}/auth/login`;
    const data_url_access_token = {
      partner_id: PARTNER_ID,
      partner_key: PARTNER_KEY
    };

    try {
      const res = await axios.post(url_access_token, data_url_access_token);
      const access_token = await res.data.access_token;
      await setItemAsync(ACCESS_TOKEN, access_token);
    } catch (err) {
      alert(`api error :${err}`);
      console.log(`api error :${err}`);
    }
  }
  goHomeScreen() {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: "MainApp" }]
    });
    this.props.navigation.dispatch(resetAction);
  }
  async login() {
    this.setState({ isLoading: true });
    const url_access_token = `${apiUrl}/auth/login`;

    const url_login = `${apiUrl}/msulogin`;
    const data_url_access_token = {
      partner_id: PARTNER_ID,
      partner_key: PARTNER_KEY
    };
    const data_login = {
      user: this.state.username,
      pass: this.state.password,
    };
    // const data_login = { user: "msu", pass: "1qaz@WSX" };
    try {
      const res_access_token = await axios.post(
        url_access_token,
        data_url_access_token
      );

      const access_token = await res_access_token.data.access_token;
      console.log(`access token : ${access_token}`);
      await setItemAsync(ACCESS_TOKEN, access_token);

      const res_user_token = await httpClient.post(url_login, data_login);
      const can_login = await res_user_token.data.status;
      if (can_login) {
        const user_token = await res_user_token.data.data;
        console.log(`user token : ${user_token}`);
        await setItemAsync(USER_TOKEN, user_token);
        this.setState({ isLoading: false });
        this.goHomeScreen();
      } else {
        this.setState({ isLoading: false });
        Alert.alert(
          "เข้าสู่ระบบไม่สำเร็จ",
          "กรุณาตรวจสอบชื่อผู้ใช้านและรหัสผ่าน"
        );
      }
    } catch (err) {
      this.setState({ isLoading: false });
      Alert.alert("เกิดข้อผิดพลาด");
      console.log(`api error :${err}`);
    }
  }

  render() {
    return (
      <>
        <View style={Style.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={Style.bgImage}
            imageStyle={Style.bgImageStyle}
          />

          <SafeAreaView
            style={[
              Style.container,
              {
                flexDirection: "column",
                paddingTop: Platform.OS === "android" ? 25 : 0
              }
            ]}
          >
            <KeyboardAvoidingView
              style={Style.container}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              {this.state.isLoading && (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 100
                  }}
                >
                  <ActivityIndicator />
                </View>
              )}
              <View style={{ flex: 1, alignItems: "center", paddingTop: 15 }}>
                <Image source={logo} style={Style.imageLogoSplash} />
                <Text
                  style={{
                    fontSize: 30,
                    color: "#020779",
                    fontWeight: "bold",
                    marginTop: 20
                  }}
                >
                  ลงชื่อเข้าใช้งาน
                </Text>
                <Text style={{ fontSize: 16, color: "#3B3D48" }}>
                  GIS MOBILE APPLICATION
                </Text>
                {!this.state.onFocus && (
                  <Image
                    source={user_lock_login_icon}
                    style={{
                      width: 80,
                      height: 80,
                      marginTop: 20,
                      marginBottom: 40
                    }}
                  />
                )}
              </View>

              <View style={{ flex: 1, alignItems: "center", paddingTop: 15 }}>
                <View
                  style={{
                    width: "85%",
                    height: 53,
                    marginVertical: 20
                  }}
                >
                  <Image
                    source={iconUsername}
                    style={{
                      width: 18,
                      height: 18.5,
                      position: "absolute",
                      left: 23,
                      top: 17,
                      zIndex: 2
                    }}
                  />
                  <TextInput
                    style={{
                      fontSize: 16,
                      height: 53,
                      backgroundColor: "white",
                      borderRadius: 50,
                      borderColor: "#DCCFFE",
                      borderWidth: 1,
                      paddingLeft: 65,
                      paddingRight: 23
                    }}
                    value={this.state.username}
                    onFocus={() => this.setState({ onFocus: true })}
                    onBlur={() => this.setState({ onFocus: false })}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder="ชื่อผู้ใช้งาน"
                  />
                </View>
                <View
                  style={{
                    width: "85%",
                    height: 53,
                    marginVertical: 19
                  }}
                >
                  <Image
                    source={iconPassword}
                    style={{
                      width: 14.16,
                      height: 20.14,
                      position: "absolute",
                      left: 23,
                      top: 17,
                      zIndex: 2
                    }}
                  />
                  <TextInput
                    style={{
                      fontSize: 16,
                      height: 50,
                      backgroundColor: "white",
                      borderRadius: 50,
                      borderColor: "#DCCFFE",
                      borderWidth: 1,
                      paddingLeft: 65,
                      paddingRight: 23
                    }}
                    secureTextEntry={true}
                    onFocus={() => this.setState({ onFocus: true })}
                    onBlur={() => this.setState({ onFocus: false })}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder="รหัสผ่าน"
                  />
                </View>
                <TouchableOpacity
                  onPress={() => this.login()}
                  style={Style.btnSubmitLogin}
                >
                  <Text style={{ fontSize: 23, color: "#fff" }}>ตกลง</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>

          <Text
            style={{
              fontSize: 12,
              color: "#010979",
              position: "absolute",
              bottom: 17,
              alignSelf: "center"
            }}
          >
            COPYRIGHT © 2021 VHV. ALL RIGHTS RESERVED
          </Text>
        </View>
      </>
    );
  }
}

export default Screen;
