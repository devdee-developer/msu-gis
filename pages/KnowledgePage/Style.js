import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5FC"
  },
  scrollView: {
    backgroundColor: "#F7F5FC"
  },
  titleGroup: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F5C761",
    height: 98,
    flexDirection: "row"
  },
  sliderGroup: {
    height: deviceHeight / 3,
    backgroundColor: "#FFFFFF"
  },
  cardFooter: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 15
  },
  cardFooterIcon: {
    width: 13,
    height: 11,
    marginTop:5
  },
  cardFooterLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: "#6F63FD"
  },
  buttonCategory: {
    backgroundColor: "#DCCFFE",
    height: 40,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginLeft: 13,
    borderRadius: 8,
    alignItems: "center"

  },
  buttonCategorySelected: { backgroundColor: "#6F63FD" },
  buttonLabelCategory:{fontSize:18,color:'#3B3D48',fontWeight:'bold'},
  buttonLabelCategorySelected:{color:"#FFFFFF"}
});
