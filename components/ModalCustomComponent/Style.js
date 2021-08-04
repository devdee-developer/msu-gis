import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerBgModal: {
    flex: 1,
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    position: "fixed",
    backgroundColor: "rgba(192,192,192,0.5);",
    zIndex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerModal: {
    width: 355,
    height: 550,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    marginTop: 70,
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
