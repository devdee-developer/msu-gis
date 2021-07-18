import React, { Component } from 'react';
import { View,Text,TouchableOpacity,Image,ImageBackground, Button } from 'react-native';
import Style from './Style';
import logo from '../../assets/logo.png';
import image from '../../assets/bg_splash.png';
import user_lock_icon from '../../assets/user_lock_icon.png';
import arrow_r from '../../assets/arrow-r.png';
class Screen extends Component {
  render() {
    return (
      <View style={[Style.container, {flexDirection: "column"}]}>
        <ImageBackground 
        source={{ uri: image }} 
        resizeMode="cover" 
        style={Style.bgImage}  
        imageStyle={Style.bgImageStyle}/>
        
        <View style={Style.containerLogo}>
          <Image source={{ uri: logo }} style={Style.imageLogoSplash} />
        </View>
        <View style={Style.text1}>
          <Text style={{fontSize:16,fontWeight:"bold"}}>แอพพลิเคชั่นเพื่อการเฝ้าระวังด้านสุขภาพ</Text>
        </View>
        <View style={Style.text2} >
          <Text style={{fontSize:25,color:"#000072",fontWeight:"bold"}}>ด้วยเทคโนโลยี จีไอเอส</Text>
        </View>
        <View style={Style.text3} >
          <Text style={{fontSize:16,fontWeight:"bold"}}>GIS MOBILE APPLICATION</Text>
        </View>
        <View style={{ flex: 13}} >
            <View style={Style.containerBtnLoginSplash}>
              <TouchableOpacity  onPress={() =>this.props.navigation.navigate('LoginScreen') } style={Style.btnSplashLogin}>
                <Text style={{ fontSize: 20, color: '#fff' }}>
                  <Image source={{ uri: user_lock_icon }} style={{width:30,height:30,float:"left"}} />    เข้าสู่ระบบ <Image source={{ uri: arrow_r }} style={{width:25,height:13,position:"absolute",top:19,right:20}} />
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default Screen;