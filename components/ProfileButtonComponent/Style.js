import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    zIndex: 1
  },
  button: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E1F0",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center"
  },
  label: { fontSize: 18, color: "#010979" },
  iconCloseModal: {
    position: "absolute",
    right: 5,
    top: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  iconNorti: {
    height: 18,
    width: 18,
    backgroundColor: "#F53F4D",
    position: "absolute",
    left: -9,
    top: 0,
    borderRadius: 9,
    zIndex: 1,
    justifyContent: "center"
  },
  imageNorti: {
    width: 7.32,
    height: 8.79,
    position: "absolute",
    alignSelf: "center"
  },
  modalMenu: {
    position: "absolute",
    top: 50,
    right: 10,
    width: 220,
    height: 300,
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 15
  },
  modalLogout: {
    position: "absolute",
    top: 145,
    width: 370,
    height: 375,
    paddingTop: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignSelf: "center"
  },
  modalLogoutLabel: {
    color: "#F26E4F",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10
  },
  iconLogout1: {
    width: 40,
    height: 72,
    position: "absolute",
    top: "48%",
    left: "42%"
  },
  iconLogout2: {
    width: 33,
    height: 27,
    position: "absolute",
    top: "55%",
    left: "50%"
  },
  modalLogoutButton: {
    height: 53,
    width: 158,

    borderRadius: 27,
    justifyContent: "center"
  }
});
