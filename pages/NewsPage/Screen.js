import {
  Dimensions,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { Component } from "react";

import Card from '../../components/CardCustomComponent/Screen'
import Slideshow from "react-native-image-slider-show";
import Style from "./Style";
import axios from "axios";
import { apiUrl } from "../../constants/config";
const deviceHeight = Dimensions.get("window").height;

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 2,
      interval: null,
      dataSource: [],
      newsList:[]
    };
  }
  componentDidMount() {
 
    this.loadData()
  }
  
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  async loadData(){
    const url = `${apiUrl}/getNews`
    const data = {token:"HW3DgGnn73CIfdHtOZaViXYBN4H32z7NT63Q5r6sm7vBL77spcGx0mEWSmTYla+hKoK0zi02oo/NmBniuMI0kYIveDwIJABedVILkDhDPnA="}
    const headers = {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tb25wbGVybi5jb21cL2xhcmF2ZWxcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MjcyOTc4NzksImV4cCI6MTYyNzMwMTQ3OSwibmJmIjoxNjI3Mjk3ODc5LCJqdGkiOiJlMW1leUNESnZOdFNCZlVWIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.YbzIZecvBbMrt8guIIvGe5SH4vPRNAGKmtR1KdPpHyI'
    }
    try{
      const res = await axios.post(url,data,{headers:headers});
      const result = await res.data.Data
      this.intialData(result)
    }
    
    catch(err){
      alert(`api error :${err}`)
      console.log(`api error :${err}`)
    }
  }
  intialData(data){

    this.setState({dataSource:data.slideNews.map(slide=>({...slide,url:slide.banner})),newsList:data.newsList},() => {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position:
              this.state.position === this.state.dataSource.length
                ? 0
                : this.state.position + 1,
          });
        }, 5000),
      });
  });
   
  }
  render() {
   const renderNewsList = () => {
      return this.state.newsList.map((data, index) => (
          <Card key={'news'+index} onPress={() =>  this.props.navigation.navigate("NewsDetailScreen", { detail: data })} thumbnail={data.banner} text={data.header} date={data.publicDate}/>
      ));
    };
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.titleGroup}>
            <Text style={{ fontSize: 30, color: "#010979" }}>
              ข่าวสารและกิจกรรม
            </Text>
            <Text style={{ fontSize: 16, color: "#3B3D48" }}>
              แจ้งข่าว กิจกรรมและการปฏิบัติหน้าที่อาสาสมัครชุมชน{" "}
            </Text>
          </View>

          <View style={Style.sliderGroup}>
           {this.state.dataSource.length>0&& <Slideshow
              dataSource={this.state.dataSource}
              position={this.state.position}
              height={deviceHeight / 3}
              arrowSize={0}
              indicatorColor={"rgba(0, 9, 121, 1)"}
              indicatorSelectedColor={"rgba(118,118,255,1)"}
              onPositionChanged={(position) => this.setState({ position })}
              containerStyle={Style.sliderContainer}
              onPress={(item) => {
                this.props.navigation.navigate("NewsDetailScreen", { detail: item.image });
              }}
            />} 
            <View style={{ height: 5 }}></View>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 15,
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ fontSize: 30, color: "#010979" }}>
                ข่าวทั้งหมด
              </Text>
              <Text style={{ fontSize: 16, color: "#3B3D48" }}>
                เพื่อไม่พลาดทุกเรื่องราวที่เกิดขึ้น
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flex: 1,
              }}
            >
              {/* for button  */}
            </View>
          </View>
         {renderNewsList()}
        </ScrollView>
      </View>
    );
  }
}
export default Screen;
