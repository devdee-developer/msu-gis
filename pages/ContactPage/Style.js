import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // container
  container: {
    flex: 1,
    backgroundColor: '#F7F5FC',
    flexDirection: 'column',
  },
  containerFilterHead: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#010979',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  containerFilterContent: {
    alignItems: 'center',
    flex: 3,
    backgroundColor: '#010979',
    flexDirection: 'row',
  },
  containerOlderQty: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    flexDirection: 'row',
  },
  containerOlderList: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row',
  },
  containerBgOlderList: {
    backgroundColor: '#FFFFFF',
    margin: 5,
    borderRadius: 10
  },
  containerImageOlder: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerOlderDetail: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  containerOlderDetailLine2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerOlderDetailLine3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerTagHr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerOlderStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // text
  textApp: {
    color: 'blue',
  },
  textHeadFilter: {
    fontFamily: 'Prompt',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOlderQty: {
    flex: 1,
    fontFamily: 'Prompt',
    color: '#010979',
    fontStyle: 'normal',
    fontSize: 18,
    marginLeft: 10,
    marginVertical: 20,
  },
  textNumberOlderQty: {
    flex: 1,
    fontFamily: 'Prompt',
    color: '#6F63FD',
    fontStyle: 'normal',
    fontSize: 18,
    marginVertical: 20,
  },
  textOlderName: {
    flex: 1,
    fontFamily: 'Prompt',
    color: '#010979',
    fontStyle: 'normal',
    fontSize: 22,
    marginVertical: 4,
    paddingLeft: 7,
  },
  textOlderAge: {
    flex: 10,
    fontFamily: 'Prompt',
    color: '#010979',
    fontStyle: 'normal',
    fontSize: 16,
    marginVertical: 4,
  },
  textOlderAddress: {
    flex: 10,
    fontFamily: 'Prompt',
    color: '#3B3D48',
    fontStyle: 'normal',
    fontSize: 14,
    marginVertical: 4,
  },
  textOlderhealth: {
    flex: 1,
    fontFamily: 'Prompt',
    color: '#FCDDE1',
    fontStyle: 'normal',
    fontSize: 14,
    marginVertical: 4,
  },
  textOlderdoc: {
    flex: 1,
    fontFamily: 'Prompt',
    color: '#0D0E12',
    fontStyle: 'normal',
    fontSize: 14,
    marginVertical: 4,
  },
  textOldervisit: {
    flex: 1,
    fontFamily: 'Prompt',
    color: '#0D0E12',
    fontStyle: 'normal',
    fontSize: 14,
    marginVertical: 4,
  },

  // image
  imageContactIconHead: {
    width: 20,
    height: 20,
    backgroundColor: '#010979',
    resizeMode: 'center',
    marginHorizontal: 10,
  },
  imageLogoSplash: {
    width: 150,
    height: 150,
  },
  imageOlder: {
    width: 66,
    height: 66,
    resizeMode: 'center',
    margin: 10,
  },
  imageUserIcon: {
    flex: 1,
    height: 15,
    resizeMode: 'center',
    margin: 6,
  },
  imageFlagIcon: {
    flex: 1,
    height: 15,
    resizeMode: 'center',
    margin: 6,
  },
  imageHealthIcon_1: {
    flex: 1,
    height: 19,
    resizeMode: 'contain',
  },
  imageDocIcon: {
    flex: 1,
    height: 15,
    resizeMode: 'contain',
  },
  imageVisitIcon: {
    flex: 1,
    height: 15,
    resizeMode: 'contain',
  },

  //icon
  arrow_d: {
    width: 20,
    height: 20,
    backgroundColor: '#010979',
    resizeMode: 'center',
    marginHorizontal: 10,
  },
  arrow_right: {
    width: 10,
    height: 10,
    resizeMode: 'center',
    margin: 10,
  },

  //input
  inputProvince: {
    height: 40,
    margin: 12,
    fontSize: 18,
    borderWidth: 1,
    backgroundColor: '#DCCFFE',
    color: '#010979',
    borderRadius: 10,
    paddingLeft: 12,
  },
  inputDistrict: {
    height: 40,
    width: 163,
    fontSize: 18,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#DCCFFE',
    color: '#010979',
    borderRadius: 10,
    paddingLeft: 12,
  },
  inputMoo: {
    height: 40,
    width: 163,
    fontSize: 18,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#DCCFFE',
    color: '#010979',
    borderRadius: 10,
    paddingLeft: 12,
  },

  //modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
