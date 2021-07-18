import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
      },
    bgImage:{
      position: "absolute",
      width:"100%",
      height:"100%"
    },
    bgImageStyle:{
      resizeMode: "cover",
      alignSelf: "flex-end"
    },
    btnSplashLogin:{
      width:"80%",
      height:50,
      backgroundColor:"#1bc3a2",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:50
    },
    imageLogoSplash:{
      width:150,
      height:150
    },
    containerBtnLoginSplash:{
      flex:1,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginBottom:20
    },
    text1:{ flex: 1,justifyContent: 'center',alignItems: 'center' },
    text2:{ flex: 1,justifyContent: 'center',alignItems: 'center'},
    text3:{ flex: 1,justifyContent: 'center',alignItems: 'center' },
    containerLogo:{ flex: 6,justifyContent: 'center',alignItems: 'center' }

});