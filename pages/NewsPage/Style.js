import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5FC",
  },
  scrollView: {
    backgroundColor: "#F7F5FC",
  },
  titleGroup: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
  },
  sliderGroup: {
    height: deviceHeight / 3,
    backgroundColor: "#FFFFFF",
  },
  sliderContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 30,
    justifyContent: "space-between",
  },
});
