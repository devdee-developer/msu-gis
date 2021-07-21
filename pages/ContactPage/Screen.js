import {
  Image,
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
      olderQty: '289',
      FilterModel: {
        Province: 'จังหวัด มหาสารคาม',
        District: 'อบต. สันป่าตอง',
        Moo: 'หมู่ที่ 5',
      },
      showFilterContent: true,
      olderLists: [
        {
          avatar: '',
          name: 'นาย ชัยสิทธิ์ มิตรมงคลกุล',
          secondLine: 'อายุ 65 ปี, 3 เดือน',
          thridLine: '99/8 หมู่ 5 ตำบลสันป่าตอง',
          healthText: 'ติดเตียง',
          docText: 'กำลังออกประเมิน..',
          visitText: 'ออกเยี่ยมแล้ว',
          healthStatus: 1,
          docStatus: 1,
          visitStatus: 2,
        },
      ],
    }
  }
  state = {
    activeSections: [],
  }

  toggleshowFilterContent() {
    this.setState({
      showFilterContent: !this.state.showFilterContent,
    })
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
        <View style={Style.containerBgOlderList}>
          <View style={Style.containerOlderList}>
            <View style={Style.containerImageOlder}>
              <Image source={{ uri: older }} style={Style.imageOlder} />
            </View>
            <View style={Style.containerOlderDetail}>
              <Text style={Style.textOlderName}>นาย ชัยสิทธิ์ มิตรมงคลกุล</Text>
              <View style={Style.containerOlderDetailLine2}>
                <Image
                  source={{ uri: user_icon }}
                  style={Style.imageUserIcon}
                />
                <Text style={Style.textOlderAge}>อายุ 65 ปี, 3 เดือน</Text>
              </View>

              <View style={Style.containerOlderDetailLine3}>
                <Image
                  source={{ uri: flag_icon }}
                  style={Style.imageFlagIcon}
                />
                <Text style={Style.textOlderAddress}>
                  99/8 หมู่ 5 ตำบลสันป่าตอง
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image source={{ uri: arrow_right }} style={Style.arrow_right} />
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
                  <Text style={Style.textOlderhealth}>ติดเตียง</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 15,
                  backgroundColor: '#FCDDE1',
                  margin: 10,
                  borderRadius: 50,
                  flexDirection: 'row',
                }}
              >
                <View style={{ flex: 1, marginLeft: 7 }}>
                  <Image
                    source={{ uri: doc_icon }}
                    style={Style.imageDocIcon}
                  />
                </View>
                <View style={{ flex: 5, marginLeft: 5 }}>
                  <Text style={Style.textOlderdoc}>กำลังประเมิน...</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 15,
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
                  <Text style={Style.textOldervisit}>รอออกเยี่ยม...</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
export default Screen
