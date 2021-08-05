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
      showTutorial: true,
      typeEmergency: "",
      subject: "",
      detail: "",
      olderLists: [],
    };
  }
  toggleshowContentList() {
    var data = JSON.stringify({
      token:
        "TwBPqvpbLSvylLYAjNd1xcQ/9tkIqmkyjWIzlpuMVtllKDJaS+dF5V/dVqHon1I1rUoOGNiesHODpenMm+qibGuXtBrUN1rZi4lwqSRwGNs=",
    });
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tb25wbGVybi5jb21cL2xhcmF2ZWxcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2Mjc5ODAzODIsImV4cCI6MTYyODM0MDM4MiwibmJmIjoxNjI3OTgwMzgyLCJqdGkiOiJFV2owU3hmQnFvWHlJbTNhIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.2-Uo5yeJ5rStYN5ZN_AWu0hDV5M7-QcI-LY7qgo-Zdc",
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
          {this.state.showTutorial ? (
            <Modal
              view={
                <View style={{alignItems:'center'}}>
                  <Image source={tutorial} style={Style.tutorial} />
                  <TouchableOpacity
                    style={Style.btnhideTutorial}
                    onPress={() => this.toggleshowTutorial()}
                  >
                    <Text style={Style.textBtnClose}>ปิด</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          ) : (
            // <View style={Style.containerBgModal}>
            //   <View style={Style.containerModal}>

            //   </View>
            // </View>
            <></>
          )}

          <ScrollView style={Style.container}>
            <View style={{ height: 250 }}>
              <Image source={map} style={Style.imageMap} />
            </View>
            <View style={Style.containerContactListBar}>
              <Image
                source={contact_icon_head}
                style={Style.imageContactIconHead}
              />
              <Text style={Style.textContactAll}>แสดงรายชื่อผู้สูงอายุ</Text>
              <Text style={Style.textAll}>ทั้งหมด</Text>
              <TouchableOpacity onPress={() => this.toggleshowContentList()}>
                <Image
                  source={arrow_right_white}
                  style={Style.arrow_right_white}
                />
              </TouchableOpacity>
            </View>
            <View style={Style.containerBtnShowHied}>
              <Text style={Style.textOlderName}>{this.state.olderName}</Text>
              {this.state.showOlderDetail ? (
                <>
                  <TouchableOpacity
                    style={Style.btnhideData}
                    onPress={() => this.toggleshowOlderDetail()}
                  >
                    <Text style={Style.textBtnHied}>ซ่อน</Text>
                    <Image source={arrow_u} style={Style.arrow_u} />
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity
                  style={Style.btnShowData}
                  onPress={() => this.toggleshowOlderDetail()}
                >
                  <Text style={Style.textBtnShow}>แสดงข้อมูล</Text>
                  <Image source={arrow_d} style={Style.arrow_d} />
                </TouchableOpacity>
              )}
            </View>
            <View style={Style.containerTagHr}>
              <View
                style={{ flex: 1, height: 1, backgroundColor: "#E4E1F0" }}
              />
            </View>
            {this.state.showOlderDetail ? (
              <>
                <View style={Style.containerOlderDetail}>
                  <View style={Style.containerOlderDetailName}>
                    <Text style={Style.textOlderDetailNameTitle}>
                      ชื่อผู้สูงอายุ
                    </Text>
                    <Text style={Style.textOlderDetailName}>
                      {this.state.olderName}
                    </Text>
                  </View>
                  <View style={Style.containerOlderDetailAge}>
                    <Text style={Style.textOlderDetailAgeTitle}>อายุ</Text>
                    <Text style={Style.textOlderDetailAge}>
                      {this.state.olderAge}
                    </Text>
                  </View>
                  <View style={Style.containerOlderDetailStatus}>
                    <Text style={Style.textOlderDetailStatusTitle}>
                      สถานะสุขภาพ
                    </Text>
                    <View style={Style.containerOlderDetailStatusShow}>
                      <Text style={Style.textOlderDetailStatus}>
                        ผู้สูงอายุ “{this.state.olderHealth}”
                      </Text>
                    </View>
                    <View style={{ flex: 0.7 }}></View>
                  </View>
                  <View style={Style.containerOlderDetailDisease}>
                    <Text style={Style.textOlderDetailDiseaseTitle}>
                      โรคประจำตัว
                    </Text>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <View style={Style.containerOlderDetailDiseaseShow}>
                        <Text style={Style.textOlderDetailDisease}>
                          โรคเบาหวาน
                        </Text>
                      </View>
                      <View style={Style.containerOlderDetailDiseaseShow}>
                        <Text style={Style.textOlderDetailDisease}>
                          โรคความดันโลหิต
                        </Text>
                      </View>
                      <View style={Style.containerOlderDetailDiseaseShow}>
                        <Text style={Style.textOlderDetailDisease}>
                          โรคเก๊า
                        </Text>
                      </View>
                    </View>
                    <View style={{ flex: 0.7 }}></View>
                  </View>
                  <View style={Style.containerOlderDetailStaff}>
                    <Text style={Style.textOlderDetailStaff}>ผู้ดูแล</Text>
                    <Text style={{ flex: 2, color: "#010979", fontSize: 16 }}>
                      089 999 9999
                    </Text>
                    <TouchableOpacity style={Style.btnTel}>
                      <Text style={{ flex: 1, color: "#FFFFFF", fontSize: 14 }}>
                        โทรออก
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={Style.containerTagHr}>
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "#E4E1F0" }}
                  />
                </View>
              </>
            ) : (
              <></>
            )}
            <View style={{ flex: 1 }}>
              <View style={Style.containerHelp}>
                <Image source={edit_icon} style={Style.edit_icon} />
                <Text style={{ flex: 3, color: "#010979", fontSize: 14 }}>
                  รายละเอียด
                </Text>

                <TouchableOpacity style={Style.btnCallHelp}>
                  <Image source={tel} style={Style.tel} />
                  <Text style={{ flex: 4, color: "#FFFFFF", fontSize: 12 }}>
                    โทรช่วยเหลือ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ flex: 4, flexDirection: "column", alignItems: "center" }}
            >
              <TextInput
                style={Style.inputTypeEmergency}
                value={this.state.typeEmergency}
                placeholder="ประเภทเหตุด่วน"
              />
              <TextInput
                style={Style.inputSubject}
                value={this.state.subject}
                placeholder="เรื่องที่แจ้ง"
              />
              <TextInput
                multiline
                numberOfLines={10}
                style={Style.inputDetail}
                value={this.state.detail}
                placeholder="รายละเอียด"
              />
            </View>
            <View style={Style.containerBrowseImg}>
              <View style={Style.containerImgCamera}>
                <Image source={camera} style={Style.camera} />
              </View>
            </View>
            {this.state.olderLists.map((item, index) => {
              return this.renderItemOlder(item, index);
            })}
          </ScrollView>
        </View>
        <View style={Style.containerFooter}>
          <View style={Style.containerBgFooter}>
            <TouchableOpacity style={Style.btnCancle}>
              <Text style={Style.textBtnClose}>ยกเลิก</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.btnSubmit}>
              <Text style={Style.textBtnClose}>ส่งเรื่อง</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
export default Screen;
