import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { Component } from 'react'

import Style from './Style'
import arrow_d from '../../assets/arrow_d.png'
import arrow_right from '../../assets/arrow_right.png'
import axios from 'axios'
import contact_icon_head from '../../assets/contact_icon_head.png'
import doc_icon from '../../assets/doc_icon.png'
import flag_icon from '../../assets/flag_icon.png'
import health_1_icon from '../../assets/health_1_icon.png'
import older from '../../assets/older.png'
import user_icon from '../../assets/user_icon.png'
import visit_icon from '../../assets/doc_icon.png'

class Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSections: [],
      titleFilter: 'เลือกพื้นที่ดูแล เพื่อเลือกรายชื่อที่ต้องการ',
      olderQty: '',
      FilterModel: {
        Province: '',
        District: '',
        Moo: '',
      },
      showFilterContent: true,
      olderLists: [
      ],
      modalVisible: false,
    }
  }

  // getAccessToken() {
  //   var axios = require('axios')
  //   var FormData = require('form-data')
  //   var data = new FormData()
  //   data.append('email', 'test@gamil.com')
  //   data.append('password', '1234')

  //   var config = {
  //     method: 'post',
  //     url: 'http://monplern.com/laravel/api/auth/login',
  //     headers: {
  //       Accept: '*/*',
  //       'Content-Type':
  //         'multipart/form-data; boundary=<calculated when request is sent>',
  //       Authorization: 'Basic YnJva2VyOmJyb2tlcl8xMjM=',
  //     },
  //     data: data,
  //   }
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data))
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }

  // loginUser() {
  //   var axios = require('axios')
  //   var data = JSON.stringify({ user: 'msu', pass: '1qaz@WSX' })
  //   var token =
  //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tb25wbGVybi5jb21cL2xhcmF2ZWxcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MjcyODMwMDIsImV4cCI6MTYyNzI4NjYwMiwibmJmIjoxNjI3MjgzMDAyLCJqdGkiOiJvTnhkSVgzMU42RWhGSFVEIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.s83qpQ9OnwBJUmkpwXbnCoVGhPaMUgUPEKnOLtqrH8g'
  //   var config = {
  //     method: 'post',
  //     url: 'http://monplern.com/laravel/api/msulogin',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + token,
  //     },
  //     data: data,
  //   }
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data))
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }

  getOlders() {
    var data = JSON.stringify({
      token:
        'HrPGcbYFDu7tkfJTQl4LqEnxr8QfpbOnoPSsjbqEcSDBr4G9q0eiO//DXOpYhRtlk8Ba54XZGhLUq8FusHX1tqxZvCY9hHXOq35K+TP98ws=',
    })
    var headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tb25wbGVybi5jb21cL2xhcmF2ZWxcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MjcyODg1MDksImV4cCI6MTYyNzI5MjEwOSwibmJmIjoxNjI3Mjg4NTA5LCJqdGkiOiJ0R1F0QTkyYlpiQlBtekxWIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.xvlkE9LYwUG13iJ-ocXaAscJV4b9iWQVCoJaeW75uzs',
    }
    var config = {
      method: 'post',
      url: 'http://monplern.com/laravel/api/getOlders',
      headers: headers,
      data: data,
    }

    axios(config).then((response) => {
      if (response.status == 200) {
        this.setState({ olderLists: response.data.Data.olderLists.olders })
        this.setState({ olderQty: response.data.Data.olderLists.totalOlder })
        var FilterModel= {
          Province: response.data.Data.olderLists.provinceFilter,
          District: response.data.Data.olderLists.tambolFilter,
          Moo: response.data.Data.olderLists.mooFilter,
        }
        this.setState({ FilterModel: FilterModel})
      }
    })
  }
  componentDidMount() {
    // this.getAccessToken()
    // this.loginUser()
    this.getOlders()
  }

  toggleshowFilterContent() {
    this.setState({
      showFilterContent: !this.state.showFilterContent,
    })
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  renderItemOlder = (item,index) => {
    return (
      <View style={Style.containerBgOlderList} key={index}>
        <View style={Style.containerOlderList}>
          <View style={Style.containerImageOlder}>
            <Image source={{ uri: item.avatar }} style={Style.imageOlder} />
          </View>
          <View style={Style.containerOlderDetail}>
            <Text style={Style.textOlderName}>{item.name}</Text>
            <View style={Style.containerOlderDetailLine2}>
              <Image source={{ uri: user_icon }} style={Style.imageUserIcon} />
              <Text style={Style.textOlderAge}>{item.secondLine}</Text>
            </View>

            <View style={Style.containerOlderDetailLine3}>
              <Image source={{ uri: flag_icon }} style={Style.imageFlagIcon} />
              <Text style={Style.textOlderAddress}>{item.thridLine}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity onPress={() => this.setModalVisible(true)}>
              <Image source={{ uri: arrow_right }} style={Style.arrow_right} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.containerTagHr}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#E4E1F0' }} />
        </View>
        <View style={Style.containerOlderStatus}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                flex: 10,
                backgroundColor: '#010979',
                margin: 10,
                borderRadius: 50,
                flexDirection: 'row',
              }}
            >
              <View style={{ flex: 1, marginLeft: 7 }}>
                <Image
                  source={{ uri: health_1_icon }}
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
                backgroundColor: '#FCDDE1',
                margin: 10,
                borderRadius: 50,
                flexDirection: 'row',
              }}
            >
              <View style={{ flex: 1, marginLeft: 7 }}>
                <Image source={{ uri: doc_icon }} style={Style.imageDocIcon} />
              </View>
              <View style={{ flex: 5, marginLeft: 5 }}>
                <Text style={Style.textOlderdoc}>{item.docText}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 18,
                backgroundColor: '#F296A3',
                margin: 10,
                borderRadius: 50,
                flexDirection: 'row',
              }}
            >
              <View style={{ flex: 1, marginLeft: 7 }}>
                <Image
                  source={{ uri: visit_icon }}
                  style={Style.imageVisitIcon}
                />
              </View>
              <View style={{ flex: 5, marginLeft: 5 }}>
                <Text style={Style.textOldervisit}>{item.visitText}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={Style.container}>
        <View style={Style.containerFilterHead}>
          <Image
            source={{ uri: contact_icon_head }}
            style={Style.imageContactIconHead}
          />
          <Text style={Style.textHeadFilter}>{this.state.titleFilter}</Text>
          <TouchableOpacity onPress={() => this.toggleshowFilterContent()}>
            <Image source={{ uri: arrow_d }} style={Style.arrow_d} />
          </TouchableOpacity>
        </View>
        {this.state.showFilterContent ? (
          <View style={Style.containerFilterContent}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                backgroundColor: '#010979',
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
                  flexDirection: 'row',
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
          <Text style={Style.textNumberOlderQty}>{this.state.olderQty} คน</Text>
          <View style={{ flex: 1 }}></View>
        </View>
        {this.state.olderLists.map((item,index) => {
          return this.renderItemOlder(item,index)
        })}
        {/* <View style={Style.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              this.setModalVisible(!this.state.modalVisible)
            }}
          >
            <View style={Style.centeredView}>
              <View style={Style.modalView}>
                <Text style={Style.modalText}>Hello World!</Text>
                <Pressable
                  style={[Style.button, Style.buttonClose]}
                  onPress={() => this.setModalVisible(!this.state.modalVisible)}
                >
                  <Text style={Style.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[Style.button, Style.buttonOpen]}
            onPress={() => this.setModalVisible(true)}
          >
            <Text style={Style.textStyle}>Show Modal</Text>
          </Pressable>
        </View> */}
      </ScrollView>
    )
  }
}
export default Screen
