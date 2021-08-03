import { Button, Image } from "react-native";
import React, { Component } from "react";

import AppStyles from "./AppStyle";
import ContactScreen from "./pages/ContactPage/Screen";
import { HeaderBackButton } from "@react-navigation/stack";
import HeaderWithSearch from "./components/HeaderWithSearchComponent/Screen";
import HomeScreen from "./pages/HomePage/Screen";
import IconBack from "./assets/icon_back.png";
import KnowledgeDetailScreen from "./pages/KnowledgeDetailPage/Screen";
import KnowledgeScreen from "./pages/KnowledgePage/Screen";
import LoginScreen from "./pages/LoginPage/Screen";
import { NavigationContainer } from "@react-navigation/native";
import NewsDetailScreen from "./pages/NewsDetailPage/Screen";
import NewsScreen from "./pages/NewsPage/Screen";
import SplashScreen from "./pages/SplashPage/Screen";
import { createStackNavigator } from "@react-navigation/stack";

class App extends Component {
  render() {
    const Stack = createStackNavigator();
    function LogoTitle() {
      return (
        <Image
          style={{ width: 176, height: 40}}
          source={require("./assets/header_image.png")}
        />
      );
    }
    function Back(props) {
      return (
        <Image style={{ width: 21.93, height: 17.31 ,marginLeft:15}} source={IconBack} />
      );
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NewsScreen">
          <Stack.Screen
            options={{ headerShown: false }}
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              headerLeft: () => null,
            }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ContactScreen"
            component={ContactScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            // options={{
            //   headerRight: (props) => <HeaderWithSearch {...props} />,
            //   headerTitle: () => null,
            //   headerBackTitleVisible: false,
            //   headerBackImage: (props) => <Back {...props} />,
            // }}
            name="NewsScreen"
            component={NewsScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            options={{
              headerRight: () => null,
              headerTitle: () => null,
              headerBackTitleVisible: false,
              headerBackImage: (props) => <Back {...props} />,
            }}
            name="NewsDetailScreen"
            component={NewsDetailScreen}
          />
             <Stack.Screen
            options={{ headerShown: false }}
            name="KnowledgeScreen"
            component={KnowledgeScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            options={{
              headerRight: () => null,
              headerTitle: () => null,
              headerBackTitleVisible: false,
              headerBackImage: (props) => <Back {...props} />,
            }}
            name="KnowledgeDetailScreen"
            component={KnowledgeDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
