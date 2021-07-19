import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F5FC',
      },
     headerGroup:{
        height:deviceHeight / 3,
        backgroundColor:"#FFFFFF",
      }
});