import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const ratio = deviceWidth / 640;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  scrollView: {
    backgroundColor: "#FFFFFF"
  },
  titleLabel: {
    // fontFamily: "Prompt-Medium",
    color: "#010979",
    fontSize: 26
  },
  subHead: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  date: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  dateIcon: {
    width: 13.84,
    height: 13.84
  },
  dateLabel: {
    marginLeft: 5,
    fontSize: 12,
    color: "#97989B"
  },
  banner: {
    height: 420 * ratio,
    width: deviceWidth,
    resizeMode: "cover",
    marginTop: 10
  },
  shareButton: {
    width: 91,
    height: 40,
    backgroundColor: "#7676FF",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10
  },
  line: {
    borderWidth: 1,
    width: deviceWidth * 0.9,
    borderColor: "#3B3D48",
    marginVertical: 25
  },
  imageFooter: {
    height: 39,
    width: 195,
    resizeMode: "contain"
  },
   subTextIcon: {
    width: 15.36,
    height: 12.35,
  },
  subTextLabel: {
    marginLeft: 5,
    fontSize: 16,
    color: "#6F63FD",
  },
});
