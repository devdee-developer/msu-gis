import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet
} from "react-native";
import iconLogout1 from "../../assets/icon_logout1.png";
import iconLogout2 from "../../assets/icon_logout2.png";
import Style from "./Style";
import CloseIcon from "../../assets/close.png";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import { CommonActions } from "@react-navigation/native";
import { ACCESS_TOKEN, USER_TOKEN } from "../../constants/config";
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false, showLogoutConfirm: false };
  }
  logout() {
    this.setState({ showLogoutConfirm: false });
    setItemAsync(USER_TOKEN, "").then(() => {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: "SplashScreen" }]
      });
      this.props.navigation.dispatch(resetAction);
    });
  }
  render() {
    return (
      <>
        <TouchableOpacity
          activeOpacity={1}
          style={Style.container}
          onPress={() => this.setState({ showMenu: true })}
        >
          <View style={Style.iconNorti}>
            <Image
              source={require("../../assets/notification.png")}
              style={Style.imageNorti}
            />
          </View>
          <Image
            style={{ width: 39, height: 39, borderRadius: 20, marginRight: 13 }}
            source={require("../../assets/older.png")}
          />
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.showMenu}
          onRequestClose={() => {
            this.setState({ showMenu: false });
          }}
        >
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "rgba(0,0,0,0.65)" }
            ]}
          />
          <View style={Style.modalMenu}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({ showMenu: false })}
              style={Style.iconCloseModal}
            >
              <Image
                source={CloseIcon}
                style={{
                  width: 12.54,
                  height: 12.54
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={Style.button}>
              <Image
                style={{
                  width: 31,
                  height: 31,
                  borderRadius: 20,
                  marginRight: 13
                }}
                source={require("../../assets/older.png")}
              />
              <Text style={Style.label}>ข้อมูลผู้ใช้</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={Style.button}>
              <Text style={Style.label}>การแจ้งเตือน</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={Style.button}>
              <Text style={Style.label}>ตั้งค่าใช้งาน</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[Style.button, { borderBottomWidth: 0, zIndex: 100 }]}
              onPress={() =>
                this.setState({ showMenu: false, showLogoutConfirm: true })
              }
            >
              <Text style={Style.label}>ออกจากระบบ</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.showLogoutConfirm}
          onRequestClose={() => {
            this.setState({ showLogoutConfirm: false });
          }}
        >
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "rgba(0,0,0,0.65)" }
            ]}
          />
          <View style={Style.modalLogout}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({ showLogoutConfirm: false })}
              style={Style.iconCloseModal}
            >
              <Image
                source={CloseIcon}
                style={{
                  width: 12.54,
                  height: 12.54
                }}
              />
            </TouchableOpacity>

            <Text style={Style.modalLogoutLabel}>ออกจากระบบ</Text>
            <Text
              style={{ color: "#3B3D48", fontSize: 20, textAlign: "center" }}
            >
              คุณต้องการออกจากระบบหรือไม่?
            </Text>
            <Image source={iconLogout1} style={Style.iconLogout1} />
            <Image source={iconLogout2} style={Style.iconLogout2} />
            <View
              style={{
                position: "absolute",
                bottom: 22,
                flexDirection: "row",
                paddingHorizontal: 16,
                justifyContent: "space-around",
                width: "100%"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({ showLogoutConfirm: false });
                }}
                style={[
                  Style.modalLogoutButton,
                  {
                    backgroundColor: "#6F63FD"
                  }
                ]}
              >
                <Text
                  style={{
                    fontSize: 23,
                    color: "#FFFFFF",
                    textAlign: "center"
                  }}
                >
                  ยกเลิก
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.logout();
                }}
                style={[
                  Style.modalLogoutButton,
                  {
                    backgroundColor: "#FFFFFF",
                    borderColor: "#F26E4F",
                    borderWidth: 1
                  }
                ]}
              >
                <Text
                  style={{
                    fontSize: 23,
                    color: "#F26E4F",
                    textAlign: "center"
                  }}
                >
                  ยืนยัน
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
export default Screen;
