import React, { Component } from 'react';
import { View,Text,TouchableOpacity,Image,ImageBackground, Button,TextInput } from 'react-native';
import Style from './Style';
import logo from '../../assets/logo.png';
import image from '../../assets/bg_login.png';
import user_lock_login_icon from '../../assets/login_user_lock_icon.png';
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
        <View style={Style.text2} >
          <Text style={{fontSize:25,color:"#000072",fontWeight:"bold"}}>ลงชื่อเข้าใช้งาน</Text>
        </View>
        <View style={Style.text3} >
          <Text style={{fontSize:16,fontWeight:"bold"}}>GIS MOBILE APPLICATION</Text>
        </View>
        <View style={{flex:3,flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'flex-end'}}>
          <Image source={{uri:user_lock_login_icon}} style={{width:80,height:80}}></Image>

        </View>
        <View style={{ flex: 13,alignItems:"center"}} >
          <TextInput style={{width:"80%",height:50,backgroundColor:"white",borderRadius:50,textAlign:"center",marginTop:30,borderColor:"#B6B5FE",borderWidth:1}}  placeholder="ชื่อผู้ใช้งาน" />
          <TextInput style={{width:"80%",height:50,backgroundColor:"white",borderRadius:50,textAlign:"center",marginTop:30,borderColor:"#B6B5FE",borderWidth:1}} secureTextEntry={true}  placeholder="รหัสผ่าน" />
        
          <TouchableOpacity  onPress={() =>this.props.navigation.navigate('HomeScreen') } style={Style.btnSubmitLogin}>
                <Text style={{ fontSize: 20, color: '#fff' }}>
                  ตกลง
                </Text>
              </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Screen;