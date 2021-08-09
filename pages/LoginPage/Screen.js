import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

import Style from "./Style";
import iconPassword from "../../assets/password.png";
import iconUsername from "../../assets/username.png";
import image from "../../assets/bg_login.png";
import logo from "../../assets/logo.png";
import user_lock_login_icon from "../../assets/login_user_lock_icon.png";

class Screen extends Component {
  render() {
    return (
      <View style={[Style.container]}>
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
              paddingTop: Platform.OS === "android" ? 25 : 0,
            },
          ]}
        >
          <View style={Style.containerLogo}>
            <Image source={logo} style={Style.imageLogoSplash} />
          </View>
          <View style={Style.text2}>
            <Text
              style={{ fontSize: 30, color: "#020779", fontWeight: "bold" }}
            >
              ลงชื่อเข้าใช้งาน
            </Text>
          </View>
          <View style={Style.text3}>
            <Text style={{ fontSize: 16, color: "#3B3D48" }}>
              GIS MOBILE APPLICATION
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Image
              source={user_lock_login_icon}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View style={{ flex: 13, alignItems: "center", paddingTop: 19 }}>
            <View
              style={{
                width: "80%",
                height: 53,
                marginVertical: 19,
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
                  zIndex: 2,
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
                  paddingRight: 23,
                }}
                placeholder="ชื่อผู้ใช้งาน"
              />
            </View>
            <View
              style={{
                width: "80%",
                height: 53,
                marginVertical: 19,
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
                  zIndex: 2,
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
                  paddingRight: 23,
                }}
                secureTextEntry={true}
                placeholder="รหัสผ่าน"
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("HomeScreen")}
              style={Style.btnSubmitLogin}
            >
              <Text style={{ fontSize: 23, color: "#fff" }}>ตกลง</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Text
          style={{
            fontSize: 12,
            color: "#010979",
            position: "absolute",
            bottom: 17,
            alignSelf:'center'
          }}
        >
          COPYRIGHT © 2021 VHV. ALL RIGHTS RESERVED
        </Text>
      </View>
    );
  }
}

export default Screen;
