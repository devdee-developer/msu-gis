import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(240,238,247,1)",
  },
  slider_show_group: {
    flex: 4,
  },
  news_group: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingTop: 5,
  },
  menu_button_group: {
    flex: 4,

    padding: 10,
    paddingTop: 5,
  },
  news: {
    flex: 1,
    borderRadius: 9,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "#9595F240",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    flexDirection: "row",
    elevation: 5
  },
  news_icon: {
    flex: 1,
    width: 22,
    height: null,
    resizeMode: "contain",
  },
  news_label: {
    flex: 6,
    alignSelf: "center",
    color: "rgba(0, 9, 121, 1)",
    marginLeft: 10,
  },
  menu_button: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 0,
    marginBottom: 12,
    borderRadius: 25,
    alignItems: "center",
    padding: 10,
    shadowColor: "#9595F273",
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 5
  },
  menu_button_image: {
    flex: 3,
    width: 107,
    height: null,
    resizeMode: "contain",
  },
  menu_button_label: {
    flex: 1,
    fontWeight:'bold',
    color: "white",
    fontSize: 20,
    marginBottom: 5,
    textAlign:'center'
  },
});
