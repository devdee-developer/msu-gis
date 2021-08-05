import { Button, Image } from "react-native";
import React, { Component } from "react";

import AppStyles from "./AppStyle";
import ContactScreen from "./pages/ContactPage/Screen";
import EmergencyPage from "./pages/EmergencyPage/Screen";
import HomeScreen from "./pages/HomePage/Screen";
import LoginScreen from "./pages/LoginPage/Screen";
import { NavigationContainer } from "@react-navigation/native";
import NewsScreen from "./pages/NewsPage/Screen";
import OlderListPage from "./pages/OlderListPage/Screen";
import SplashScreen from "./pages/SplashPage/Screen";
import { createStackNavigator } from "@react-navigation/stack";

class App extends Component {
  render() {
    const Stack = createStackNavigator();
    function LogoTitle() {
      return (
        <Image
          style={{ width: 176, height: 40 }}
          source={require("./assets/header_image.png")}
        />
      );
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EmergencyPage">
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
            options={{ headerShown: true }}
            name="ContactScreen"
            component={ContactScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="EmergencyPage"
            component={EmergencyPage}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="OlderListPage"
            component={OlderListPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="NewsScreen"
            component={NewsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
