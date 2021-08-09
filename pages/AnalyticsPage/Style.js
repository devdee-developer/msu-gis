import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5FC",
  },
  datasetLabel: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 9,
  },
  containerDatasetLabel: {
    marginTop: 50,
    paddingHorizontal: 20,
    marginLeft: 40,
  },
  containerChart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: deviceWidth / 2.5 + 100,
  },
  chartTitleLabel: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#010979",
  },
  containerHeader: {
    height: 112,
    backgroundColor: "#010979",
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
  },
  selectLabel: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: deviceWidth - 36,
  },
  selectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    height: 40,
    width: deviceWidth - 36,
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 35,
    paddingVertical: 8,
  },
  selectBoxIconDown: { position: "absolute", top: 8, right: 10 },
  containerContent: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  selectedTitle: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E1F0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  selectedTitleLabel: { fontSize: 23, color: "#010979", marginHorizontal: 5 },
  selectedTitleImage: {
    width: 46.56,
    height: 37.96,
    marginHorizontal: 5,
  },
  updateDateLabel: { marginHorizontal: 20, fontSize: 14, color: "#97989B" },
  iconCloseModal:{
    position: "absolute",
    right: 10,
    top: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  }
});
