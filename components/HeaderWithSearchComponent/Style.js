import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 container:{
    flexDirection:'row',height: 54 ,justifyContent:'space-between',alignItems:'center',borderBottomWidth:1
 },
 iconSearch:{
    position: "absolute",
    height: 15.79,
    width: 15.35,
    left: 15,
    top: 12.73,
    resizeMode: "contain"
  },
  textInputSearch:
  {
    paddingLeft: 40,
    paddingRight: 15,
    textAlign: "left",
    height: 40,
    borderRadius: 20
  }
});