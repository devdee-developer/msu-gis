import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    backgroundColor: "#FFFFFF",
  },
  titleLabel:{
    fontFamily: "Prompt-Medium",
    color: "#010979",
    fontSize: 26,
  },
  date: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  dateIcon: {
    width: 13.84,
    height: 13.84,
  },
  dateLabel: {
    marginLeft: 5,
    fontSize: 12,
    color: "#97989B",
  },
});
