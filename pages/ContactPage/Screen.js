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
import arrow_right from "../../assets/arrow_right.png";
import axios from "axios";
import btn_arrow_r_blue from "../../assets/btn_arrow_r_blue.png";
import btn_arrow_r_green from "../../assets/btn_arrow_r_green.png";
import check_icon from "../../assets/check_icon.png";
import close from "../../assets/close.png";
import contact_icon_head from "../../assets/contact_icon_head.png";
import doc_icon_black from "../../assets/doc_icon_black.png";
import doc_icon_green from "../../assets/doc_icon_green.png";
import flag_icon_black from "../../assets/flag_icon_black.png";
import flag_icon_blue from "../../assets/flag_icon_blue.png";
import health from "../../assets/health.png";
import health_1_icon from "../../assets/health_1_icon.png";
import health_2_icon from "../../assets/health_2_icon.png";
import health_3_icon from "../../assets/health_3_icon.png";
import icon_time from "../../assets/icon_time.png";
import user_icon from "../../assets/user_icon.png";
import visit_green from "../../assets/visit_green.png";
import visit_icon_black from "../../assets/visit_icon_black.png";
import visit_icon_green from "../../assets/visit_icon_green.png";
import visit_ping from "../../assets/visit_ping.png";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      titleFilter: "เลือกพื้นที่ดูแล เพื่อเลือกรายชื่อที่ต้องการ",
      olderQty: "",
      FilterModel: {
        Province: "",
        District: "",
        Moo: "",
      },
      showFilterContent: true,
      olderLists: [],
      modalVisible: false,
      ModalItemModel: {
        avatar: "",
        name: "",
        textOlderStatus: "",
        imgOlderStatus: "",
        secondLine: "",
        thridLineDistance: "",
        docStatus: "",
        docStatusText: "",
        docBgHead: "",
        docTextLine1: "",
        docTextLine2: "",
        docColorText: "",
        docBgBody: "",
        btnDocArrowRight: "",
        imgDoc: "",
        visitStatus: "",
        visitStatusText: "",
        visitBgHead: "",
        visitTextLine1: "",
        visitTextLine2: "",
        visitColorText: "",
        visitBgBody: "",
        btnVisitArrowRight: "",
        imgVisit: "",
      },
    };
  }

  getOlders() {
    var data = JSON.stringify({
      token:
        "YkvKiFY6D/YpiLUx6NmBT7c8iD5/W1jLlGGood2Jt/8TJV04TKRJBd7Q30/Wrf9kVn/V4g3iU4bi4k5XmigQFwjkz0HVVQAUIe0XEWKT3w4=",
    });
    var headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tb25wbGVybi5jb21cL2xhcmF2ZWxcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MjgwNDgwMDksImV4cCI6MTYyODQwODAwOSwibmJmIjoxNjI4MDQ4MDA5LCJqdGkiOiJJWUFwQjRneU83QXhrVElxIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.-ejPb9Em6DQo-1TnsC9CgOGLrKsSlmrdA5a_OoIr_7U",
    };
    var config = {
      method: "post",
      url: "http://monplern.com/laravel/api/getOlders",
      headers: headers,
      data: data,
    };

    axios(config).then((response) => {
      if (response.status == 200) {
        var OlderList = response.data.Data.olderLists.olders;
        for (let i = 0; i < OlderList.length; i++) {
          // healthStatus
          if (OlderList[i].healthStatus == 1) {
            OlderList[i].ImghealthStatus = health_1_icon;
          } else if (OlderList[i].healthStatus == 2) {
            OlderList[i].ImghealthStatus = health_2_icon;
          } else if (OlderList[i].healthStatus == 3) {
            OlderList[i].ImghealthStatus = health_3_icon;
          } else {
          }

          // docStatus
          if (OlderList[i].docStatus == 1) {
            OlderList[i].ImgdocStatus = doc_icon_black;
            OlderList[i].BgdocStatus = "#FCDDE1";
          } else if (OlderList[i].docStatus == 3) {
            OlderList[i].ImgdocStatus = doc_icon_black;
            OlderList[i].BgdocStatus = "#F296A3";
          } else if (OlderList[i].docStatus == 2) {
            OlderList[i].ImgdocStatus = doc_icon_green;
            OlderList[i].BgdocStatus = "#ECF8F7";
          } else {
          }

          // visitStatus
          if (OlderList[i].visitStatus == 1) {
            OlderList[i].ImgvisitStatus = visit_icon_black;
            OlderList[i].BgvisitStatus = "#F296A3";
          } else if (OlderList[i].visitStatus == 2) {
            OlderList[i].ImgvisitStatus = visit_icon_green;
            OlderList[i].BgvisitStatus = "#ECF8F7";
          } else {
          }
        }
        this.setState({ olderLists: OlderList });
        this.setState({ olderQty: response.data.Data.olderLists.totalOlder });
        var FilterModel = {
          Province: response.data.Data.olderLists.provinceFilter,
          District: response.data.Data.olderLists.tambolFilter,
          Moo: response.data.Data.olderLists.mooFilter,
        };
        this.setState({ FilterModel: FilterModel });
      }
    });
  }
  componentDidMount() {
    this.getOlders();
  }

  toggleshowFilterContent() {
    this.setState({
      showFilterContent: !this.state.showFilterContent,
    });
  }
  setModalVisible = (visible, item) => {
    if (visible) {
      var ModalItemModel = {
        avatar: item.avatar,
        name: item.name,
        textOlderStatus: item.healthText,
        imgOlderStatus: item.ImghealthStatus,
        secondLine: item.secondLine,
        thridLineDistance: item.ModalItemModel.thridLineDistance,
        docStatus: item.docStatus,
        docStatusText: item.ModalItemModel.docStatusText,
        docBgHead: item.BgdocStatus,
        docTextLine1: item.ModalItemModel.docTextLine1,
        docTextLine2: item.ModalItemModel.docTextLine2,
        docColorText: "#FFFFFF",
        docBgBody: "#6F63FD",
        btnDocArrowRight: btn_arrow_r_blue,
        imgDoc: health,
        visitStatus: item.visitStatus,
        visitStatusText: item.ModalItemModel.visitStatusText,
        visitBgHead: item.BgvisitStatus,
        visitTextLine1: item.ModalItemModel.visitTextLine1,
        visitTextLine2: item.ModalItemModel.visitTextLine2,
        visitColorText: "",
        visitBgBody: "",
        btnVisitArrowRight: btn_arrow_r_green,
      };
      if (item.visitStatus == 1 && item.docStatus == 2) {
        ModalItemModel.visitColorText = "#0D0E12";
        ModalItemModel.visitBgBody = "#1BC3A2";
        ModalItemModel.imgVisit = visit_green;
      } else if (item.visitStatus == 1) {
        ModalItemModel.visitColorText = "#0D0E12";
        ModalItemModel.visitBgBody = "#FFF4F5";
        ModalItemModel.imgVisit = visit_ping;
      } else if (item.visitStatus == 2) {
        ModalItemModel.visitColorText = "#FFFFFF";
        ModalItemModel.visitBgBody = "#1BC3A2";
        ModalItemModel.imgVisit = visit_green;
      }
      this.setState({ ModalItemModel: ModalItemModel });
    }

    this.setState({ modalVisible: visible });
  };

  renderItemOlder = (item, index) => {
    return (
      <View style={Style.containerBgOlderList} key={index}>
        <View style={Style.containerOlderList}>
          <View style={Style.containerImageOlder}>
            <Image source={item.avatar} style={Style.imageOlder} />
          </View>
          <View style={Style.containerOlderDetail}>
            <Text style={Style.textOlderName}>{item.name}</Text>
            <View style={Style.containerOlderDetailLine2}>
              <Image source={user_icon} style={Style.imageUserIcon} />
              <Text style={Style.textOlderAge}>{item.secondLine}</Text>
            </View>

            <View style={Style.containerOlderDetailLine3}>
              <Image source={flag_icon_black} style={Style.imageFlagIcon} />
              <Text style={Style.textOlderAddress}>{item.thridLine}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => this.setModalVisible(true, item)}>
              <Image source={arrow_right} style={Style.arrow_right} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.containerTagHr}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#E4E1F0" }} />
        </View>
        <View style={Style.containerOlderStatus}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={Style.containerOlderStatusHealth}>
              <View style={{ flex: 1.5, marginLeft: 5 }}>
                <Image
                  source={item.ImghealthStatus}
                  style={Style.imageHealthIcon_1}
                />
              </View>
              <View style={{ flex: 5, marginLeft: 5 }}>
                <Text style={Style.textOlderhealth}>{item.healthText}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 18,
                backgroundColor: item.BgdocStatus,
                marginVertical: 10,
                marginHorizontal: 3,
                borderRadius: 50,
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, marginLeft: 7 }}>
                <Image source={item.ImgdocStatus} style={Style.imageDocIcon} />
              </View>
              <View style={{ flex: 5, marginLeft: 5 }}>
                <Text style={Style.textOlderdoc}>{item.docText}</Text>
              </View>
              {item.docStatus == 2 ? (
                <View style={{ flex: 1, marginRight: 7 }}>
                  <Image source={check_icon} style={Style.imageDocIcon} />
                </View>
              ) : (
                <>
                  <View style={{ flex: 1, marginRight: 7 }}></View>
                </>
              )}
            </View>
            <View
              style={{
                flex: 18,
                backgroundColor: item.BgvisitStatus,
                marginVertical: 10,
                marginHorizontal: 3,
                borderRadius: 50,
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, marginLeft: 7 }}>
                <Image
                  source={item.ImgvisitStatus}
                  style={Style.imageVisitIcon}
                />
              </View>
              <View style={{ flex: 5, marginLeft: 5 }}>
                <Text style={Style.textOldervisit}>{item.visitText}</Text>
              </View>
              {item.visitStatus == 2 ? (
                <View style={{ flex: 1, marginRight: 7 }}>
                  <Image source={check_icon} style={Style.imageVisitIcon} />
                </View>
              ) : (
                <>
                  <View style={{ flex: 1, marginRight: 7 }}></View>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };

  renderModal = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => this.setModalVisible(false)}>
            <Image source={close} style={Style.imagecloseIconModal} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={this.state.ModalItemModel.avatar}
            style={{ width: 190, height: 190 }}
          />
          <View style={Style.containerOlderStatusHealthModal}>
            <View style={{ flex: 1.5, marginLeft: 10 }}>
              <Image
                source={this.state.ModalItemModel.imgOlderStatus}
                style={Style.imageHealthIcon_1}
              />
            </View>
            <View style={{ flex: 5, marginLeft: 10 }}>
              <Text style={Style.textOlderhealth}>
                {this.state.ModalItemModel.textOlderStatus}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={Style.textOlderName}>
            {this.state.ModalItemModel.name}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 4 }}></View>
          <Image source={user_icon} style={Style.imageFlagIconModal} />
          <Text style={Style.textOlderAgeModal}>
            {this.state.ModalItemModel.secondLine}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 4 }}></View>
          <Image source={flag_icon_blue} style={Style.imageFlagIconModal} />
          <Text style={Style.textOlderAddressModal_1}>ระยะห่างจากคุณ</Text>
          <Text style={Style.textOlderAddressModal_2}>
            {this.state.ModalItemModel.thridLineDistance}
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "column",
            margin: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: this.state.ModalItemModel.docBgHead,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text style={Style.textDocStatus_1}>สถานะการประเมิน :</Text>
            <Text style={Style.textDocStatus_2}>
              {this.state.ModalItemModel.docStatusText}
            </Text>
            {this.state.ModalItemModel.docStatus == 2 ? (
              <View style={{ flex: 1, marginRight: 7 }}>
                <Image source={check_icon} style={Style.imageDocIconModal} />
              </View>
            ) : (
              <>
                <View style={{ flex: 1, marginRight: 7 }}></View>
              </>
            )}
          </View>
          <View
            style={{
              flex: 3,
              backgroundColor: this.state.ModalItemModel.docBgBody,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Image
              source={this.state.ModalItemModel.imgDoc}
              style={Style.imageDocModal}
            />
            <View style={{ flex: 10, flexDirection: "column" }}>
              <Text style={Style.textDocStatusModalLine1}>
                {this.state.ModalItemModel.docTextLine1}
              </Text>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image source={icon_time} style={Style.icon_time} />
                <Text style={Style.textDocStatusModalLine2}>
                  {this.state.ModalItemModel.docTextLine2}
                </Text>
              </View>
            </View>
            <Image
              source={this.state.ModalItemModel.btnDocArrowRight}
              style={Style.btn_arrow_r}
            />
          </View>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "column",
            margin: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: this.state.ModalItemModel.visitBgHead,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text style={Style.textVisitStatus_1}>สถานะออกเยี่ยม :</Text>
            <Text style={Style.textVisitStatus_2}>
              {this.state.ModalItemModel.visitStatusText}
            </Text>
            {this.state.ModalItemModel.visitStatus == 2 ? (
              <View style={{ flex: 1, marginRight: 7 }}>
                <Image source={check_icon} style={Style.imageDocIconModal} />
              </View>
            ) : (
              <>
                <View style={{ flex: 1, marginRight: 7 }}></View>
              </>
            )}
          </View>
          <View
            style={{
              flex: 3,
              backgroundColor: this.state.ModalItemModel.visitBgBody,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Image
              source={this.state.ModalItemModel.imgVisit}
              style={Style.imageDocModal}
            />
            <View style={{ flex: 10, flexDirection: "column" }}>
              <Text
                style={{
                  flex: 10,
                  // fontFamily: 'Prompt',
                  color: this.state.ModalItemModel.visitColorText,
                  fontStyle: "normal",
                  fontSize: 20,
                  marginVertical: 4,
                }}
              >
                {this.state.ModalItemModel.visitTextLine1}
              </Text>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image source={icon_time} style={Style.icon_time} />
                <Text style={Style.textDocStatusModalLine2}>
                  {this.state.ModalItemModel.visitTextLine2}
                </Text>
              </View>
            </View>
            <Image
              source={this.state.ModalItemModel.btnVisitArrowRight}
              style={Style.btn_arrow_r}
            />
          </View>
        </View>
      </>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.modalVisible ? <Modal view={this.renderModal()} /> : <></>}
        <View style={{ flex: 1 }}>
          <ScrollView style={Style.container}>
            <View style={Style.containerFilterHead}>
              <Image
                source={contact_icon_head}
                style={Style.imageContactIconHead}
              />
              <Text style={Style.textHeadFilter}>{this.state.titleFilter}</Text>
              <TouchableOpacity onPress={() => this.toggleshowFilterContent()}>
                <Image source={arrow_d} style={Style.arrow_d} />
              </TouchableOpacity>
            </View>
            {this.state.showFilterContent ? (
              <View style={Style.containerFilterContent}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    backgroundColor: "#010979",
                  }}
                >
                  <TextInput
                    style={Style.inputProvince}
                    value={this.state.FilterModel.Province}
                    disableFullscreenUI={true}
                    editable={false}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <TextInput
                      style={Style.inputDistrict}
                      disableFullscreenUI={true}
                      editable={false}
                      value={this.state.FilterModel.District}
                    />
                    <TextInput
                      style={Style.inputMoo}
                      value={this.state.FilterModel.Moo}
                      disableFullscreenUI={true}
                      editable={false}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <></>
            )}
            <View style={Style.containerOlderQty}>
              <Text style={Style.textOlderQty}>จำนวณผู้สูงอายุ</Text>
              <Text style={Style.textNumberOlderQty}>
                {this.state.olderQty} คน
              </Text>
              <View style={{ flex: 1 }}></View>
            </View>
            {this.state.olderLists.map((item, index) => {
              return this.renderItemOlder(item, index);
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Screen;
