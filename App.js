import { Image, Text, View } from "react-native";
import React, { Component } from "react";
import iconHome from "./assets/icon_menu_home.png";
import iconHomeActive from "./assets/icon_menu_home_active.png";
import iconContact from "./assets/icon_menu_contact.png";
import iconContactActive from "./assets/icon_menu_contact_active.png";
import iconMap from "./assets/icon_menu_map.png";
import iconMapActive from "./assets/icon_menu_map_active.png";
import iconNews from "./assets/icon_menu_news.png";
import iconNewsActive from "./assets/icon_menu_news_active.png";
import iconAnalytics from "./assets/icon_menu_analytics.png";
import iconAnalyticsActive from "./assets/analytics_icon_data.png";
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
import ProfileButton from "./components/ProfileButtonComponent/Screen";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Blank = () => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Blank</Text>
      </View>
    );
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    function RootStack() {
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
          <Stack.Screen
            options={{ headerShown: false }}
            name="MainApp"
            component={MainApp}
          />
        </Stack.Navigator>
      );
    }

    function HomeStack() {
      return (
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            options={{ headerShown: true }}
            options={({ navigation }) => ({
              headerLeft: (props) => <LogoTitle {...props} />,
              headerTitle: () => null,
              headerBackTitleVisible: false,
              headerRight: (props) => (
                <ProfileButton {...props} navigation={navigation} />
              )
            })}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            options={{
              headerRight: () => null,
              headerTitle: () => null,
              headerBackTitleVisible: false,
              headerBackImage: (props) => <Back {...props} />
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
              headerBackImage: (props) => <Back {...props} />
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
                    fontWeight: "bold"
                  }}
                >
                  สถิติสำรวจ
                </Text>
              ),
              headerBackTitleVisible: false,
              headerBackImage: (props) => <Back {...props} />
            }}
            name="AnalyticsScreen"
            component={AnalyticsScreen}
          />
        </Stack.Navigator>
      );
    }
    function NewsStack() {
      return (
        <Stack.Navigator initialRouteName="NewsScreen">
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
              headerBackImage: (props) => <Back {...props} />
            }}
            name="NewsDetailScreen"
            component={NewsDetailScreen}
          />
        </Stack.Navigator>
      );
    }
    function MainApp() {
      return (
        <Tab.Navigator
          initialRouteName="HomeScreen"
          tabBarOptions={{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "#000979",
            activeBackgroundColor: "#7676FF",
            labelStyle: { fontSize: 14 },
            tabStyle: {
              paddingVertical: 5,
              height: 60,
              borderRadius: 12,
              margin: 4
            },
            safeAreaInsets: { bottom: 35 }
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              let imageSize
              if (route.name === "HomeScreen") {
                icon = focused ? iconHomeActive : iconHome;
                size ={width: 22, height: 23.5, }
              } else if (route.name === "ContactScreen") {
                icon = focused ? iconContactActive : iconContact;
                size ={width: 29, height: 22.5, }
              }else if (route.name === "MapScreen") {
                icon = focused ? iconMapActive : iconMap;
                size ={width: 29, height: 27.6, }
              }else if (route.name === "NewsScreen") {
                icon = focused ? iconNewsActive : iconNews;
                size ={width: 35.3, height: 25.4, }
              }else if (route.name === "AnalyticsScreen") {
                icon = focused ? iconAnalyticsActive : iconAnalytics;
                size ={width:27.2, height: 23.1, }
              }
              
              
              return (
                <Image
                  source={icon}
                  style={{...size, resizeMode: "contain" }}
                />
              );
            }
          })}
        >
          <Tab.Screen
            name="HomeScreen"
            component={HomeStack}
            options={(item) => {
              // if (item.route.state) {
              //   if ("index" in item.route.state) {
              //     if (item.route.state.index > 0)
              //       return { tabBarVisible: false };
              //   } else {
              //     return { tabBarVisible: true };
              //   }
              // } else {
              //   return { tabBarVisible: true };
              // }
              return { title: "หน้าหลัก" };
            }}
          />
          <Tab.Screen
            name="ContactScreen"
            component={Blank}
            options={(item) => ({ title: "รายชื่อ" })}
          />
          <Tab.Screen
            name="MapScreen"
            component={Blank}
            options={(item) => ({ title: "แผนที่" })}
          />
          <Tab.Screen
            name="NewsScreen"
            component={NewsStack}
            options={(item) => ({ title: "ข่าวสาร" })}
          />
          <Tab.Screen
            name="AnalyticsScreen"
            component={AnalyticsStack}
            options={(item) => ({ title: "สถิติสำรวจ" })}
          />
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
        <RootStack />
      </NavigationContainer>
    );
  }
}
export default App;
