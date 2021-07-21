import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

import ArrowRight from "../../assets/arrow-r-yellow.png";
import CalendarIcon from "../../assets/calendar_icon.png";
import Slideshow from "react-native-image-slider-show";
import Style from "./Style";

const deviceHeight = Dimensions.get("window").height;
const listNews = [
  {
    thumbnail: "http://monplern.com/laravel/img/news1.png",
    header:
      "เปิดรับอาสาสมัครเพื่อออกตรวจเยี่ยมผู้สูงอายุประจำปี 2564 ตั้งแต่วันนี้ถึง 31 ธันวาคม 2564",
    publicDate: "11 ธันวาคม 2564",
    banner: "http://monplern.com/laravel/img/bannerNews.png",
    detail:
      "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                        <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                        <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                        <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                        ",
    vdoLink: [
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
    ],
  },
  {
    thumbnail: "http://monplern.com/laravel/img/news2.png",
    header:
      "เริ่มต้นตรวจเชิงรุก เพื่อค้นหาผู้มีความเสี่ยงต่อการติดเชื้อป้องกันการแพร่กระจายของเชื้อโควิด 19",
    publicDate: "11 ธันวาคม 2564",
    banner: "http://monplern.com/laravel/img/bannerNews.png",
    detail:
      "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                        <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                        <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                        <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                        ",
    vdoLink: [
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
    ],
  },
  {
    thumbnail: "http://monplern.com/laravel/img/news3.png",
    header:
      "อาสาสมัครรุ่นใหม่เร่ิมต้นการลงเพื้นที่เพื่อให้บริหารด้านการตรวจสุขภาพผู้สูงอายุในพื้นที่ทั้งหมด",
    publicDate: "11 ธันวาคม 2564",
    banner: "http://monplern.com/laravel/img/bannerNews.png",
    detail:
      "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                        <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                        <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                        <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                        ",
    vdoLink: [
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
    ],
  },
  {
    thumbnail: "http://monplern.com/laravel/img/news4.png",
    header:
      "ฝึกอบรมลูกหลานผู้สูงอายุ เพื่อการดูแลผู้สูงอายุที่อยู่บ้านด้วยตัวเองได้อย่างถูกวิธีด้วยบุคลากรผู้เชียวชาญจากจังหวัด",
    publicDate: "11 ธันวาคม 2564",
    banner: "http://monplern.com/laravel/img/bannerNews.png",
    detail:
      "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                        <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                        <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                        <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                        ",
    vdoLink: [
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
    ],
  },
  {
    thumbnail: "http://monplern.com/laravel/img/news5.png",
    header:
      "เปิดรับอาสาสมัครเพื่อออกตรวจเยี่ยมผู้สูงอายุประจำปี 2564 ตั้งแต่วันนี้ถึง 31 ธันวาคม 2564",
    publicDate: "11 ธันวาคม 2564",
    banner: "http://monplern.com/laravel/img/bannerNews.png",
    detail:
      "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                        <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                        <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                        <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                        ",
    vdoLink: [
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
      "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
    ],
  },
];



class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 2,
      interval: null,
      dataSource: [
        {
          thumbnail: "http://monplern.com/laravel/img/news1.png",
          header:
            "เปิดรับอาสาสมัครเพื่อออกตรวจเยี่ยมผู้สูงอายุประจำปี 2564 ตั้งแต่วันนี้ถึง 31 ธันวาคม 2564",
          publicDate: "11 ธันวาคม 2564",
          url: "http://monplern.com/laravel/img/slide1.png",
          banner: "http://monplern.com/laravel/img/slide1.png",
          detail:
            "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                        <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                        <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                        <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                        <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                        <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                        ",
          vdoLink: [
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
          ],
        },
        {
          thumbnail: "http://monplern.com/laravel/img/news2.png",
          header:
            "เริ่มต้นตรวจเชิงรุก เพื่อค้นหาผู้มีความเสี่ยงต่อการติดเชื้อป้องกันการแพร่กระจายของเชื้อโควิด 19",
          publicDate: "11 ธันวาคม 2564",
          url: "http://monplern.com/laravel/img/slide2.png",
          banner: "http://monplern.com/laravel/img/slide2.png",
          detail:
            "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                    <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                    <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                    <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                    <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                    <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                    <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                    <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                    ",
          vdoLink: [
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
          ],
        },
        {
          thumbnail: "http://monplern.com/laravel/img/news3.png",
          header:
            "อาสาสมัครรุ่นใหม่เร่ิมต้นการลงเพื้นที่เพื่อให้บริหารด้านการตรวจสุขภาพผู้สูงอายุในพื้นที่ทั้งหมด",
          publicDate: "11 ธันวาคม 2564",
          url: "http://monplern.com/laravel/img/slide3.png",
          banner: "http://monplern.com/laravel/img/slide3.png",
          detail:
            "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                    <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                    <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                    <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                    <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                    <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                    <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                    <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                    ",
          vdoLink: [
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
          ],
        },
        {
          thumbnail: "http://monplern.com/laravel/img/news3.png",
          header:
            "อาสาสมัครรุ่นใหม่เร่ิมต้นการลงเพื้นที่เพื่อให้บริหารด้านการตรวจสุขภาพผู้สูงอายุในพื้นที่ทั้งหมด",
          publicDate: "11 ธันวาคม 2564",
          url: "http://monplern.com/laravel/img/slide3.png",
          banner: "http://monplern.com/laravel/img/slide3.png",
          detail:
            "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                    <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                    <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                    <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                    <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                    <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                    <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                    <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                    ",
          vdoLink: [
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
          ],
        },
        {
          thumbnail: "http://monplern.com/laravel/img/news3.png",
          header:
            "อาสาสมัครรุ่นใหม่เร่ิมต้นการลงเพื้นที่เพื่อให้บริหารด้านการตรวจสุขภาพผู้สูงอายุในพื้นที่ทั้งหมด",
          publicDate: "11 ธันวาคม 2564",
          url: "http://monplern.com/laravel/img/slide3.png",
          banner: "http://monplern.com/laravel/img/slide3.png",
          detail:
            "<h2>ผู้ป่วยรายแรกเท่าที่ทราบกันเริ่มมีอากรตั้งแต่วันที่ 1 ธันวาคมและไม่ความเชื่อมโยงกับตลาดต้องสงสัยในเมือง อู่ฮั่น</h2>\n                    <p>มีการเก็บตัวอย่างจากสิ่งแวดล้อมในตลาดไปส่งตรวจและพบเชื้อไวรัสและพบมากที่สุดในบริเวณที่ค้าสัตว์ป่าและสัตว์เลี้ยงในปาร์ม</p>\n                    <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่การติดต่อโดยระบบทางเดินอาหารยังไม่เป็นที่ยืนยันการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสัมผัสใกล้ชิดกับผุ้ป่วยโควิด</p>\n                    <p><img src='http://monplern.com/laravel/img/newsDetail1.png' /></p>\n                    <h2>การกักกันคือการจำกันกิจกรรมต่างๆ หรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติ สัมผัสใกล้ชิดกับผู้ป่วยโควิด<h2/>\n                    <p>การเพิ่มจำนวนของไวรัสเกิดขึ้นในระบบทางเดินหายใจส่วนบนและในปอดมีงานวิจัยในช่วงแรกระบุว่าการเพิ่มจำนวนของไวรัสได้ในระบบทางเดินอาหารแต่ยังไม่เป็นที่ยืนยันทการกักกันคือการจำกัดกิจกรรมต่างๆหรือการแยกผู้ที่ไม่ป่วยแต่อาจมีประวัติสมัผัสใกล้ชิดกับผู้ป่วยโควิด</p>\n                    <p><img src='http://monplern.com/laravel/img/newsDetail2.png' /></p>\n                    <h2>เรามาร่วมกันหยุดยั้งการแพร่ระบาดของโควิด<h2/>\n                    ",
          vdoLink: [
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
            "https://www.youtube.com/watch?time_continue=1&v=OjGWViz_9hI&feature=emb_logo",
          ],
        },
      ],
    };
  }
  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 4000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    renderNewsList = () => {
      return listNews.map((data, index) => (
        <TouchableOpacity style={Style.card} onPress={() => alert(data.header)}>
          <View style={{ width: 115 }}>
            <View style={{ flex: 4, padding: 5 }}>
              <Image
                source={{ uri: data.banner }}
                style={Style.cardImg}
                resizeMode="contain"
              ></Image>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <View style={Style.cardBody}>
            <View style={{ flex: 3 }}>
              <Text numberOfLines={3} style={{ fontSize: 16, color: "#0D0E12" }}>
                {data.header}
              </Text>
            </View>
            <View style={Style.cardFooter}>
              <View style={Style.buttonDetail}>
                <Text style={Style.buttonDetailLabel}>รายละเอียด</Text>
                <Image source={ArrowRight} style={Style.buttonDetailIcon} />
              </View>
              {data.publicDate && (
                <View style={Style.date}>
                  <Image source={CalendarIcon} style={Style.dateIcon} />
                  <Text style={Style.dateLabel}>{data.publicDate}</Text>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
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
            <Slideshow
              dataSource={this.state.dataSource}
              position={this.state.position}
              height={deviceHeight / 3}
              arrowSize={0}
              indicatorColor={"rgba(0, 9, 121, 1)"}
              indicatorSelectedColor={"rgba(118,118,255,1)"}
              onPositionChanged={(position) => this.setState({ position })}
              containerStyle={Style.sliderContainer}
              onPress={(item) => {
                alert(item.image.header);
                // this.props.navigation.navigate("News Detail", { id: item.image.id });
              }}
            />
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
