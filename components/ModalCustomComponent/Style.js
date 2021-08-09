import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get("window");

export default StyleSheet.create({
  containerBgModal: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.65);",
    zIndex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
  },
  containerModal: {
    // width: (window.width * 95) / 100,
    // height: (window.height * 85) / 100,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    // marginTop: 70,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flex: 1,
    flexDirection: "column",
  },
});