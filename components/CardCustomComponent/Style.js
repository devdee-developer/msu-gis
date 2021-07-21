import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 120,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    shadowColor: "rgba(201, 201, 226, 0.45098039215686275)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    justifyContent: "space-between",
  },
  cardImg: { height: 66, width: null, borderRadius: 8 },
  cardBody: { flex: 2, paddingLeft: 5 },
  cardFooter: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonDetail: {
    alignItems: "center",
    justifyContent: "center",
    width: 109,
    height: 27,
    backgroundColor: "#010979",
    borderRadius: 17,
  },
  buttonDetailLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 3,
    marginRight: 8,
  },
  buttonDetailIcon: {
    position: "absolute",
    right: 8,
    width: 11,
    height: 7,
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