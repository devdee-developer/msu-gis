import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

import Modal from "../../components/ModalCustomComponent/Screen";
import Style from "./Style";
import arrow_d from "../../assets/arrow_d.png";
import arrow_right_white from "../../assets/arrow_right_white.png";
import arrow_u from "../../assets/arrow_u.png";
import axios from "axios";
import camera from "../../assets/camera.png";
import contact_icon_head from "../../assets/contact_icon_head.png";
import crosshairs_icon from "../../assets/crosshairs_icon.png";
import edit_icon from "../../assets/edit_icon.png";
import map from "../../assets/map.png";
import pin from "../../assets/pin.png";
import tel from "../../assets/tel.png";
import tutorial from "../../assets/tutorial.png";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      olderName: "นาย ทวีจันทร์ ประสารสิน",
      olderAge: "อายุ 65 ปี ,3เดือน",
      olderHealth: "ติดเตียง",
      olderDisease: [],
      showOlderDetail: false,
      showTutorial: false,
      typeEmergency: "",
      subject: "",
      detail: "",
      olderLists: [],
    };
  }
  getOlderList() {
    var data = JSON.stringify({
      token:
        "dQPVwzwBO45KvwMhHD3a5kYn0/jfouTalfrGcIYGpnqjlZ1ujzOQbkItI1/K6NX5dc+Fp8DffoPxJzZqseVwlbOjANLZE3FYf3/6h983Dc0=",
    });
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tb25wbGVybi5jb21cL2xhcmF2ZWxcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MjgxNDM0NTMsImV4cCI6MTYyODUwMzQ1MywibmJmIjoxNjI4MTQzNDUzLCJqdGkiOiJyM0h5TnVZRnlOUEU4T3FCIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.roatKJZwi-LPAI_k720qQPhBuW2SNIkh8FoXk34jE_4",
    };
    var config = {
      method: "post",
      url: "http://monplern.com/laravel/api/getOlders",
      headers: headers,
      data: data,
    };

    axios(config).then((response) => {
      if (response.status == 200) {
        this.setState({ olderLists: response.data.Data.olderLists.olders });
      }
    });
  }
  toggleshowOlderDetail() {
    this.setState({
      showOlderDetail: !this.state.showOlderDetail,
    });
  }
  toggleshowTutorial() {
    this.setState({
      showTutorial: !this.state.showTutorial,
    });
  }
  componentDidMount() {
    this.getOlderList();
  }
  renderItemOlder = (item, index) => {
    return (
      <View style={Style.containerBgOlderList} key={index}>
        <View style={Style.containerOlderList}>
          <View style={Style.containerImageOlder}>
            <Image source={item.avatar} style={Style.imageOlder} />
          </View>
          <View style={Style.containerOlderDetailList}>
            <Text style={Style.textOlderNameList}>{item.name}</Text>
            <View style={Style.containerOlderDetailLine2}>
              <Image source={crosshairs_icon} style={Style.crosshairs_icon} />
              <Text style={Style.textOlderAddressModal_1}>ระยะทาง</Text>
              <Text style={Style.textOlderAddressModal_2}>
                {item.ModalItemModel.thridLineDistance}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F7F5FC",
            }}
          >
            <TouchableOpacity>
              <Image source={pin} style={Style.pin} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <>
        <View style={Style.container}>
          {this.state.olderLists.map((item, index) => {
            return this.renderItemOlder(item, index);
          })}
        </View>
      </>
    );
  }
}
export default Screen;
