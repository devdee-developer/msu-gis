import { ACCESS_TOKEN, USER_TOKEN } from "./constants/config";
import { Button, Image, Text, View } from "react-native";
import React, { Component } from "react";
import { getItemAsync, setItemAsync } from "expo-secure-store";

import AnalyticsScreen from "./pages/AnalyticsPage/Screen";
import ContactScreen from "./pages/ContactPage/Screen";
import HomeScreen from "./pages/HomePage/Screen";
import IconBack from "./assets/icon_back.png";
import KnowledgeDetailScreen from "./pages/KnowledgeDetailPage/Screen";
import KnowledgeScreen from "./pages/KnowledgePage/Screen";
import LoginScreen from "./pages/LoginPage/Screen";
import { NavigationContainer } from "@react-navigation/native";
import NewsDetailScreen from "./pages/NewsDetailPage/Screen";
import NewsScreen from "./pages/NewsPage/Screen";
import SplashScreen from "./pages/SplashPage/Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }
  componentDidMount() {
    this.checkLogin();
  }  
  componentDidUpdate() {

  }
  async checkLogin() {
    const user_token = await getItemAsync(USER_TOKEN);
    if (user_token) {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  }
  render() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    function AuthStack() {
      return (
        <Stack.Navigator initialRouteName="SplashScreen">
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
        </Stack.Navigator>
      );
    }

    function HomeStack() {
      return (
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            options={{ headerShown: true }}
            options={{
              headerLeft: (props) => <LogoTitle {...props} />,
              headerTitle: () => null,
              headerBackTitleVisible: false,
              headerRight: (props) => <Profile {...props} />,
            }}
            name="HomeScreen"
            component={HomeScreen}
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
      );
    }
    function AnalyticsStack() {
      return (
        <Stack.Navigator initialRouteName="AnalyticsScreen">
         <Stack.Screen
            options={{ headerShown: true }}
            options={{
              headerRight: () => null,
              headerTitle: () => (
                <Text
                  style={{
                    fontSize: 23,
                    color: "#010979",
                    alignSelf: "center",
                    fontWeight: "bold",
                  }}
                >
                  สถิติสำรวจ
                </Text>
              ),
              headerBackTitleVisible: false,
              headerBackImage: (props) => <Back {...props} />,
            }}
            name="AnalyticsScreen"
            component={AnalyticsScreen}
          />
        </Stack.Navigator>
      );
    }
    function MainApp() {
      return (
        <Tab.Navigator initialRouteName="HomeScreen">
          <Tab.Screen name="HomeScreen" component={HomeStack} options={(item)=>{
            if(item.route.state){
              if("index" in item.route.state){
                if(item.route.state.index>0)
                return {tabBarVisible:false}
              }else{
                return {tabBarVisible:true}
              }
            }else{
              return {tabBarVisible:true}
            }
          }}/>
          <Tab.Screen name="ContactScreen" component={HomeScreen}/>
          <Tab.Screen name="MapScreen" component={NewsScreen} />
          <Tab.Screen name="NewsScreen" component={NewsScreen}/>
          <Tab.Screen name="AnalyticsScreen" component={AnalyticsStack} />
        </Tab.Navigator>
      );
    }
    function LogoTitle() {
      return (
        <Image
          style={{ width: 176, height: 40, marginLeft: 15 }}
          source={require("./assets/header_image.png")}
        />
      );
    }
    function Profile() {
      return (
        <View>
          <View
            style={{
              height: 18,
              width: 18,
              backgroundColor: "#F53F4D",
              position: "absolute",
              left: -9,
              top: 0,
              borderRadius: 9,
              zIndex: 1,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./assets/notification.png")}
              style={{
                width: 7.32,
                height: 8.79,
                position: "absolute",
                alignSelf: "center",
              }}
            />
          </View>
          <Image
            style={{ width: 39, height: 39, borderRadius: 20, marginRight: 13 }}
            source={require("./assets/older.png")}
          />
        </View>
      );
    }
    function Back(props) {
      return (
        <Image
          style={{ width: 21.93, height: 17.31, marginLeft: 15 }}
          source={IconBack}
        />
      );
    }

    return (
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="HomeScreen">
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
              headerLeft: (props) => <LogoTitle {...props} />,
              headerTitle: () => null,
              headerBackTitleVisible: false,
              headerRight: (props) => <Profile {...props} />,
            }}
            name="HomeScreen"
            component={MainApp}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ContactScreen"
            component={ContactScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
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
          <Stack.Screen
            options={{ headerShown: true }}
            options={{
              headerRight: () => null,
              headerTitle: () => (
                <Text
                  style={{
                    fontSize: 23,
                    color: "#010979",
                    alignSelf: "center",
                    fontWeight: "bold",
                  }}
                >
                  สถิติสำรวจ
                </Text>
              ),
              headerBackTitleVisible: false,
              headerBackImage: (props) => <Back {...props} />,
            }}
            name="AnalyticsScreen"
            component={AnalyticsScreen}
          />
        </Stack.Navigator> */}
        {this.state.isLogin ? <MainApp /> : <AuthStack />}
      </NavigationContainer>
    );
  }
}
export default App;
